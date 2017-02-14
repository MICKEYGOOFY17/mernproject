'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const RestaurantModel = require('./restaurantEntity');

function add(req, res)
{
  logger.debug(JSON.stringify(req.body));
  if (Object.keys(req.body).length>0) {
    let restaurant = new RestaurantModel(req.body);
    restaurant.save(function(err) {
      if(err)
      {
        console.log(err);
        res.send('enter new id');
      }
      else {
        res.send('Restaurant saved successfully');
      }
    });
  }
  else {
    res.send('enter some data')
  }
}

function displayall(req, res)
{
  RestaurantModel.find({}, function(err, restaurants) {
    if(err)
    {
      res.send(err);
    }
    else {
      res.send(restaurants);
    }
  });
}

function displayid(req,res) {
  let id = req.params.id;
  RestaurantModel.find({'_id' : id}, function(err,restaurants){
    if(err)
    {
      res.send('enter a valid id');
    }
    else {
      if(restaurants.length>0)
      {
        res.send(restaurants[0].comments);
      }
      else {
        res.send('enter a valid id');
      }
    }
  });
}

function update(req,res) {
  if(Object.keys(req).length>0)
  {
      RestaurantModel.findOneAndUpdate({_id: req.body.id},
         { $set: {comments: req.body.comment}}, function(err, users) {
        if(err)
        {
          res.send('enter all details');
        }
        else {
            res.send('Updated');
          }
      });
    }
    else {
      res.send('enter a valid restaurant details');
    }
}

function deleteid(req,res) {
  let restaurantId = req.body.id;
  if(restaurantId !== null)
  {
    RestaurantModel.remove({ _id : restaurantId}, function(err) {
      if(err)
      {
        res.send(err);
      }
      else {
          res.send('Deleted the id ' + restaurantId + ' successfully');
        }
    });
  }
}

module.exports = {
  add: add,
  displayall: displayall,
  displayid: displayid,
  update: update,
  deleteid: deleteid
}
