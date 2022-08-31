const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

db.sequelize.sync()
  .then(() => {
    console.log("DB Connection Success!")
  })
  .catch(console.error);

app.use(cors({
  origin: true,
  credentials: false,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
  console.log("listening on port 3065!")
});