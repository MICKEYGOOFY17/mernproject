'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
//const userCtrl = require('./userController');
const userModel = require('./userEntity');
const userController = require('./userController');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const connectflash = require('connect-flash');

/* adding details to user collection */
router.post('/add', function(req, res) {
    userController.add(req, res);
});

/* displaying all details */
router.get('/displayall', function(req, res) {
  userController.displayall(req, res);
});

/* displaying particular detail */
router.get('/display/:user', function(req, res) {
  userController.displayuser(req,res);
});

/* deleting a user */
router.delete('/delete', function(req, res) {
  userController.deletename(req,res);
});

/* deleting all user */
router.delete('/deleteall', function(req, res) {
    userController.deleteall(req,res);
});

/* updating user password */
router.put('/update', function(req, res) {
  userController.update(req, res);
});

router.post('/login',
passport.authenticate('local', {
failureFlash: 'Invalid Username and Password',
successFlash: 'Welcome to Movie App'}
),
function(req, res) {
  res.json({responseText:'authenticated'});
}
);

router.get('/logout', function(req, res) {
console.log('Session deleted');
req.session.destroy();
res.send({redirect: '/'});
});

module.exports = router;
