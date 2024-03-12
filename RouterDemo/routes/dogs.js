const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ALL DOGS');
  });

  router.get('/:id', (req, res) => {
    res.send('ONE DOG');
  });

  router.get('/:id/edit', (req, res) => {
    res.send('EDIT ONE DOG');
  });

module.exports = router;
