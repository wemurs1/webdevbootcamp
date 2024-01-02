const express = require('express');
const app = express();

app.use((req, res) => {
  console.log('WE GOT A NEW REQUEST');
  //   res.send('RESPONSE FROM EXPRESS');
  //   res.send({ color: 'red' });
  res.send('<h1>This is a web page</h1>');
});

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});
