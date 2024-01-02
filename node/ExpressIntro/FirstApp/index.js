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

app.get('*', (req, res) => {
  res.send(`I don't know that path`);
});

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});
