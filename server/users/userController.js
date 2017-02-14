'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
//const userCtrl = require('./userController');
const userModel = require('./userEntity');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const connectflash = require('connect-flash');


function add(req, res) {
  logger.debug(JSON.stringify(req.body));
  let user = new userModel(req.body);
  if(Object.keys(req.body).length>0)
  {
  user.save(function(err) {
    if(err)
    {
      res.send('some error occurred');
    }
    else {
      res.send('User saved successfully');
    }
  });
  // res.send(user);
}
else {
res.send('enter details');
}
}

function displayall(req, res) {
  userModel.find({}, function(err, users) {
    if(err)
    {
      res.send(err);
    }
    else {
      res.send(users);
    }
  });
}

function displayuser(req, res) {
  var name = req.params.user;
  if(name !== null)
  {
    userModel.find({name : name}, function(err,users){
    if(err)
    {
      res.send(err);
    }
    else {
      if(users.length>0)
      {
        res.send(users);
      }
      else {
        res.send('user does not exist')
      }
    }
    });
  }
  else {
    res.send('enter some data');
  }
}

function deletename(req, res)
{
  let user = req.body.name;
  if(user !== null)
  {
    userModel.remove({name : user}, function(err,users){
      if(err)
      {
        res.send(err);
      }
      else {
          if(JSON.parse(users).n !== 0)
          {
            res.send('Deleted '+user+' successfully');
          }
          else {
            res.send('wrong user');
          }
        }
    });
  }
}

function deleteall(req, res) {
  userModel.remove({}, function(err,users){
    if(err)
    {
      res.send(err);
    }
    else {
        if(Number(JSON.parse(users).n) !== 0)
        {
          res.send('Deleted all successfully');
        }
        else {
          res.send('no users');
        }
      }
  });
}

function update(req, res) {
  let user = req.body.name;
  let password = req.body.password;
  console.log(user + "" +password);
  if(user !== null && user !== "")
  {
    userModel.findOneAndUpdate({name : user},{$set :{password: password}}, function(err,users){
      if(err)
      {
        res.send(err);
      }
      else {
            if(users !== null)
            {
              res.send('Updated successfully');
            }
            else {
              res.send('user does not exist');
            }
        }
    });
  }
  else {
    res.send('enter a user');
  }
}

module.exports = {
  add: add,
  update: update,
  deleteall: deleteall,
  deletename: deletename,
  displayuser: displayuser,
  displayall: displayall
};
