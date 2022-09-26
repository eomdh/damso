const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const { Post, Comment, Image, User, Hashtag } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

try {
  fs.accessSync('postImages')
} catch (error) {
  console.log("Create folder for 'postImages'.");
  fs.mkdirSync('postImages');
};

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: ap-northeast-2,
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

router.get('/:postId', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    
    if (!post) {
      return res.status(404).send('존재하지 않는 게시글입니다.');
    };

    const allInfoPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: User,
        attributes: ['id', 'nickname', 'profileImagePath'],
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname', 'profileImagePath'],
        }]
      }, {
        model: User,
        as: 'Likers',
        attributes: ['id'],
      }, {
        model: Image,
        attributes: ['src'],
      }],
    });

    res.status(200).json(allInfoPost);
  } catch (error) {
    console.error(error);
    next(error);
  };
});

router.post('/add', isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });

    const hashtags = req.body.content.match(/#[^\s#]+/g);
    if (hashtags) {
      const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
        where: { name: tag.slice(1).toLowerCase() },
      })));
      
      await post.addHashtags(result.map((v) => v[0]));
    };

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
        attributes: ['id', 'nickname', 'profileImagePath'],
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname', 'profileImagePath'],
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

router.patch('/:postId/update', isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    await Post.update({
      content: req.body.content,
    }, {
      where: {
        id: req.params.postId,
        UserId: req.user.id,
      }
    });

    const post = await Post.findOne({ where: { id: req.params.postId }});

    const hashtags = req.body.content.match(/#[^\s#]+/g);
    if (hashtags) {
      const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
        where: { name: tag.slice(1).toLowerCase() },
      })));
      
      await post.setHashtags(result.map((v) => v[0]));
    };

    if (req.body.postImages) {
      if (Array.isArray(req.body.postImages)) {
        const images = await Promise.all(req.body.postImages.map((image) => Image.create({
          src: image,
        })));
        await post.setImages(images);
      } else {
        const image = await Image.create({
          src: req.body.postImages,
        });
        await post.setImages(image);
      };
    };

    res.status(200).json({ 
      PostId: parseInt(req.params.postId),
      Content: req.body.content,
      Images: req.body.postImages,
      updatedAt: post.updatedAt,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
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
    res.status(200).json({
      type: req.body.type, 
      image: req.files.map((v) => v.location)
    });
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
        attributes: ['id', 'nickname', 'profileImagePath'],
      }]
    })
  
    res.status(201).json(allInfoComment);
  } catch (error) {
    console.error(error);
    next(error);    
  };
});

router.patch('/:postId/comment/:commentId/update', isLoggedIn, async (req, res, next) => {
  try {
    await Comment.update({
      content: req.body.content,
    }, {
      where: {
        id: req.params.commentId,
        UserId: req.user.id,
      },
    });

    const comment = await Comment.findOne({
      where: { id: req.params.commentId }
    });

    res.status(200).json({
      PostId: parseInt(req.params.postId),
      CommentId: parseInt(req.params.commentId),
      Content: req.body.content,
      updatedAt: comment.updatedAt,
    });
  } catch (error) {
    console.error(error);
    next(error);
  };
});

router.delete('/:postId/comment/:commentId/delete', isLoggedIn, async (req, res, next) => {
  try {
    await Comment.destroy({
      where: {
        id: req.params.commentId,
        UserId: req.user.id,
      },
    });
    res.status(200).json({
      PostId: parseInt(req.params.postId),
      CommentId: parseInt(req.params.commentId),
    });
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