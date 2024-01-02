const express = require('express');
const app = express();

// app.use((req, res) => {
//   console.log('WE GOT A NEW REQUEST');
//   //   res.send('RESPONSE FROM EXPRESS');
//   //   res.send({ color: 'red' });
//   res.send('<h1>This is a web page</h1>');
// });

app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} category</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Browsing the ${subreddit} category with id of ${postId}</h1>`);
});

app.get('/cats', (req, res) => {
  console.log('CAT REQUEST');
  res.send('MEOW');
});

app.post('/cats', (req, res) => {
  console.log('POST CAT REQUEST');
  res.send('POST REQUEST MEOW');
});

app.get('/dogs', (req, res) => {
  console.log('DOG REQUEST');
  res.send('WOOF');
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  console.log(req.query);
  if (!q) {
    res.send('Nothing found if nothing searched');
  }
  res.send(`<h1>Search result for ${q}</h1>`);
});

app.get('*', (req, res) => {
  res.send(`I don't know that path`);
});

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});
