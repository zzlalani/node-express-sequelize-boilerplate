const express = require('express');
const router = express.Router();

router.all('/', (req, res, next) => {
  res.send(`Server up and running ${new Date()}`);
});

module.exports = router;
