const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/users_controller');
router.get('/sign-up',userController.signup);
router.post('/create',userController.create);
router.post('/create-session',passport.authenticate(
    'local',
    {
        failureRedirect: '/'
    }),
    userController.createSession
);
router.get('/sign-out',userController.destroySession);
router.get('/update',userController.update);
router.post('/Update',userController.Update);
module.exports = router;
