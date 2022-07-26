const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const { User, Post, Comment, Image } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

try {
  fs.accessSync('profileImages')
} catch (error) {
  console.log("Create folder for 'profileImages'.");
  fs.mkdirSync('profileImages');
};

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'damso-s3',
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
    }
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const userWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }]
      });
  
      res.status(200).json(userWithoutPassword);
    } else {
      res.status(204).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  };
});

router.get('/:userId', async (req, res, next) => {
  try {
    const userWithoutPassword = await User.findOne({
      where: { id: req.params.userId },
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt']
      },
      include: [{
        model: Post,
        attributes: ['id'],
      }]
    });

    if (userWithoutPassword) {
      res.status(200).json(userWithoutPassword);
    } else {
      res.status(404).send("존재하지 않는 사용자입니다.");
    };
  } catch (error) {
    console.error(error);
    next(error);
  };
});

router.get('/:userId/posts', async (req, res, next) => {
  try {
    const where = { UserId: req.params.userId };
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }
    };
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [[ 'createdAt', 'DESC' ]],
      include: [{
        model: User,
        attributes: ['id', 'nickname', 'profileImagePath'],
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname', 'profileImagePath'],
        }],
      }, {
        model: User,
        as: 'Likers',
        attributes: ['id'],
      }, {
        model: Image,
      }]
    });
    
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (error, user, info) => {
    if (error) {
      console.error(error);
      return next(error);
    };
    
    if (info) {
      return res.status(401).send(info.reason);
    };
    
    return req.login(user, async (loginError) => {
      if (loginError) {
        console.error(error);
        return next(loginError);
      };
      
      const userWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }]
      });

      return res.status(200).json(userWithoutPassword);
    });
  })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.status(200).send('LogOut Success!');
});

router.post('/signup', isNotLoggedIn, async (req, res, next) => {
  try {
    const usedEmail = await User.findOne({
      where: {
        email: req.body.email,
      }
    });

    const usedNickname = await User.findOne({
      where: {
        nickname: req.body.nickname,
      }
    });

    if (usedEmail) {
      return res.status(403).send("이미 사용 중인 이메일입니다.");
    } else if (usedNickname) {
      return res.status(403).send("이미 사용 중인 닉네임입니다.");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });

    res.status(201).send('SignUp Success!');
  } catch (error) {
    console.error(error);
    next(error);
  };
});

router.patch('/introduce', isLoggedIn, async (req, res, next) => {
  try {
    await User.update({
      introduce: req.body.introduce,
    }, {
      where: { id: req.user.id },
    });

    res.status(200).json({ introduce: req.body.introduce });
  } catch (error) {
    console.error(error);
    next(error);
  };
});

router.post('/image', isLoggedIn, upload.single('image'), async (req, res) => {
  await User.update({
    profileImagePath: req.file.location,
  }, {
    where: { id: req.user.id },
  });

  console.log(req.file);
  res.status(200).json(req.file);
});

module.exports = router;