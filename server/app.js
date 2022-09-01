const express = require('express');
const dotenv = require('dotenv');
const db = require('./models');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passportConfig = require('./passport')
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

const app = express();
dotenv.config();

db.sequelize.sync()
  .then(() => {
    console.log("DB Connection Success!")
  })
  .catch(console.error);

app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

passportConfig();

app.use(cookieParser('damsosecret'));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
  console.log("listening on port 3065!")
});