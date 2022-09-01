const express = require('express');
const { Post, Comment, Image, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/add', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });

    const allInfoPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: User,
      }, {
        model: Comment,
      }, {
        model: Image,
      }]
    });

    res.status(201).json(allInfoPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/:postId/delete', isLoggedIn, (req, res) => {
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
      PostId: req.params.postId,
      UserId: req.user.id,
      content: req.body.content,
    });
  
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    next(error);    
  }
});

module.exports = router;