const express = require('express');
const dotenv = require('dotenv');
const db = require('./models');
const cors = require('cors');
const passport = require('passport');
const passportConfig = require('./passport')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const hashtagRouter = require('./routes/hashtag');

const app = express();
dotenv.config();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Server Running!');
});

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

app.use('/postImages', express.static(path.join(__dirname, 'postImages')));
app.use('/profileImages', express.static(path.join(__dirname, 'profileImages')));

app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/hashtag', hashtagRouter);

app.listen(3065, () => {
  console.log("listening on port 3065!")
});