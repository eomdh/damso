const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { Post, Comment, Image, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

try {
  fs.accessSync('postImages')
} catch (error) {
  console.log("Create folder for 'postImages'.");
  fs.mkdirSync('postImages');
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

router.post('/add', isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });

    if (req.body.postImages) {
      if (Array.isArray(req.body.postImages)) {
        const images = await Promise.all(req.body.postImages.map((image) => Image.create({
          src: image,
        })));
        await post.addImages(images);
      } else {
        const image = await Image.create({
          src: req.body.postImages,
        })
        await post.addImages(image);
      };
    };

    const allInfoPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }]
      }, {
        model: User,
        as: 'Likers',
        attributes: ['id'],
      }, {
        model: Image,
      }]
    });

    res.status(201).json(allInfoPost);
  } catch (error) {
    console.error(error);
    next(error);
  };
});

router.delete('/:postId/delete', isLoggedIn, async (req, res, next) => {
  try {
    await Post.destroy({
      where: { 
        id: req.params.postId,
        UserId: req.user.id,
      },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/images', isLoggedIn, upload.array('image'), (req, res) => {
    console.log(req.files);
    res.status(200).json(req.files.map((v) => v.filename));
});

router.post('/:postId/comment/add', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    })
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }

    const comment = await Comment.create({
      PostId: parseInt(req.params.postId),
      UserId: req.user.id,
      content: req.body.content,
    });

    const allInfoComment = await Comment.findOne({
      where: { id: comment.id },
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }]
    })
  
    res.status(201).json(allInfoComment);
  } catch (error) {
    console.error(error);
    next(error);    
  };
});

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    };

    await post.addLikers(req.user.id);
    res.status(200).json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  };
});

router.delete('/:postId/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    };

    await post.removeLikers(req.user.id);
    res.status(200).json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  };
});

module.exports = router;