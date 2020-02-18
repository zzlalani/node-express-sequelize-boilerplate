const router = require('express').Router();
const userService = require('../../services/user-service');

router.post('/', async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(200).json({
      message: 'user create successfully',
      data: {
        id: user.id,
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
