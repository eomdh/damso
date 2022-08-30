const express = require('express');
const app = express();
const db = require('./models');
const postRouter = require('./routes/post');

db.sequelize.sync()
  .then(() => {
    console.log("DB Connection Success!")
  })
  .catch(console.error);

app.use('/post', postRouter);

app.listen(3065, () => {
  console.log("listening on port 3065!")
});