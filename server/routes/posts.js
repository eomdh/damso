const express = require('express');
const { Op } = require('sequelize');
const { Post, User, Comment, Image } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const where = {};
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
        attributes: ['src'],
      }]
    });
    
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;   