const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();

router.post('/signup', async (req, res, next) => {
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
  }
});

module.exports = router;