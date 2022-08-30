const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/posts', (req, res) => {
  res.json([
    { id: 1, content: 'hello1', },
    { id: 2, content: 'hello2', },
    { id: 3, content: 'hello3', },
  ]);
});

app.post('/api/post', (req, res) => {
  res.json({ id: 1, content: 'hello1' });
}); 

app.listen(3065, () => {
  console.log("listening on port 3065!")
});