var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ title: 'Welcome to Pizza API' });
});

module.exports = router;
