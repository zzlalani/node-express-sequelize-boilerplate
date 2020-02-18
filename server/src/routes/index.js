const express = require('express');
const router = express.Router();

/**
 * Check server status
 */
router.use('/ping', require('./ping'));

/**
 * Admin routes
 */
router.use('/admin', require('./admin'));

module.exports = router;
