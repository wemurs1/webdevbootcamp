const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/greet', (req, res) => {
  const { name = 'No-name' } = req.cookies;
  res.send(`Hey There ${name}`);
});

app.get('/setname', (req, res) => {
  res.cookie('name', 'stevie chicks');
  res.cookie('animal', 'horse');
  res.send('Ok, sent you a cookie');
});

app.get('/getsignedcookie', (req, res) => {
    
});

app.listen(3000, () => {
  console.log('APP LISTENING ON localhost:3000');
});
