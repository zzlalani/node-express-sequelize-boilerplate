const express = require('express');
const router = express.Router();

router.get('/ping', function(req, res, next) {
  res.send(`Server up and running ${new Date()}`);
});

module.exports = router;
