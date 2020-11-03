const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');
router.get('/sign-up',userController.signup);
router.post('/create',userController.create);
module.exports = router;
