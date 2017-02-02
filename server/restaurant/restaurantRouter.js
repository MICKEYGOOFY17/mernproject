'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
//const userCtrl = require('./userController');

router.post('/add', function(req, res) {
    logger.debug("Inside user post");
    let user = req.body;
    if(Object.keys(user).length === 0)
    {
      res.send("pass a json");
    }
    else {
      res.json(user);
    }
});

router.put('/update', function(req, res) {
    let resid = req.body.restaurantId;
    let cmt = req.body.comment;
    logger.debug("To update");
    if(cmt!=null)
    {
      res.send('Your Comment is '+cmt);
    }
    else {
      res.send('enter a comment');
    }
});

router.delete('/delete', function(req, res) {
    let resid = Number(req.body.restaurantId);
    if(isNaN(resid))
    {
      res.send('enter a valid restaurant Id');
    }
    else {
      logger.debug("Deleting the Id");
      res.send('Restaurant Deleted '+ resid);
    }
});

// Get details of all user in the system
router.get('/', function(req, res) {
  console.log('Inside get');
  res.send('response from user GET route check');
});

module.exports = router;
