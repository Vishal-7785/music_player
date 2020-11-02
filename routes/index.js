const express = require('express');
const router = express.Router();
const home_controller = require('../controllers/home_controller');
router.get('/home',home_controller.home);
router.get('/',home_controller.begin);
module.exports = router;