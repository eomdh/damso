const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

try {
  fs.accessSync('profileImage')
} catch (error) {
  console.log("Create folder for 'profileImage'.");
  fs.mkdirSync('profileImage');
};

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'postImages');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + '_' + new Date().getTime() + ext);
    },
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

router.patch('/image', isLoggedIn, upload.single(), async (req, res, next) => {
  try {

  } catch (error) {
    console.error(error);
    next(error);
  };
});

module.exports = router;