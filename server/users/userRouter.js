'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
//const userCtrl = require('./userController');
const userModel = require('./userEntity');

router.post('/add', function(req, res) {
    logger.debug(JSON.stringify(req.body));
    let user = new userModel(req.body);
    user.save(function(err){
      if(err)
      {
        res.send('some error occurred');
      }
      else {
        res.send('User saved successfully');
      }
    });
    // res.send(user);
});

// Get details of all user in the system
router.get('/displayall', function(req, res) {

  userModel.find({}, function(err,users){
    if(err)
    {
      res.send(err);
    }
    else {
      res.send(users);
    }
  });
});

router.get('/display/:user', function(req, res) {

  userModel.find({name : (req.params.user)}, function(err,users){
    if(err)
    {
      res.send(err);
    }
    else {
      res.send(users);
    }
  });
});

router.delete('/delete', function(req, res) {
  let user = req.body.name;
  let value = undefined;
  if(user !== null)
  {
    userModel.remove({name : user}, function(err,users){
      if(err)
      {
        res.send(err);
      }
      else {
          res.send('Deleted successfully');
        }
    });
  }
});

router.put('/update', function(req, res) {
  let user = req.body.name;
  let password = req.body.password;
  console.log(user + "" +password);
  if(user !== null)
  {
    userModel.findOneAndUpdate({name : user},{$set :{password: password}}, function(err,users){
      if(err)
      {
        res.send(err);
      }
      else {
          res.send('Updated successfully');
        }
    });
  }
});



module.exports = router;
