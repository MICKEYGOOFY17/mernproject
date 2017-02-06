'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
//const userCtrl = require('./restaurantController');
const restaurantModel = require('./restaurantEntity');


//adding restaurants
router.post('/add',function(req, res) {
    logger.debug(JSON.stringify(req.body));
    if (Object.keys(req.body).length>0) {
      let restaurant = new restaurantModel(req.body);
      restaurant.save(function(err){
        if(err)
        {
          res.send('please enter all the details, with new id');
        }
        else {
          res.send('Restaurant saved successfully');
        }
      });
    }
    else {
      res.send("enter some data")
    }
});


//displays all the restaurant
router.get('/displayall', function(req, res) {
  restaurantModel.find({}, function(err,restaurants){
    if(err)
    {
      res.send(err);
    }
    else {
      res.send(restaurants);
    }
  });
});


//displays the restaurants in that city
router.get('/displaycity/:location', function(req, res) {
  let city = req.params.location;
  restaurantModel.find({"address.0.city" : city}, function(err,restaurants){
    if(err)
    {
      res.send("enter a valid city");
    }
    else {
      if(restaurants.length>0)
      {
        res.send(restaurants);
      }
      else {
        res.send("enter a valid city");
      }
    }
  });
});


//displays the restaurants based on name
router.get('/displayrestaurant/:name', function(req, res) {
  let name = req.params.name;
  restaurantModel.find({"name" : name}, function(err,restaurants){
    if(err)
    {
      res.send(err);
    }
    else {
      res.send(restaurants);
    }
  });
});


//displays the restaurants in that state
router.get('/displaystate/:location', function(req, res) {
  let state = req.params.location;
  restaurantModel.find({"address.0.state" : state}, function(err,restaurants){
    if(err)
    {
      res.send(err);
    }
    else {
      res.send(restaurants);
    }
  });
});



//updating all the data
router.put('/update', function(req, res) {

  if(Object.keys(req).length>0)
  {
    let resid = Number(req.body._id);
    let resname = req.body.name;
    let rescity = req.body.address[0].city;
    let resstate = req.body.address[0].state;
    logger.debug("To update");
    logger.debug(resid+" "+resname+" "+rescity+" "+resstate);
    if(resid !== 0 && resname !== "" && rescity !== "" && resstate !== "")
    {
      restaurantModel.findOneAndUpdate({_id : resid},{$set :{name : resname,'address.0.city':rescity,'address.0.state':resstate}}, function(err,users){
        if(err)
        {
          res.send("enter all details");
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
    else {
      res.send('enter some details');
    }
});

//deleting particular restaurant based on id
router.delete('/deleteid', function(req, res) {
  let restaurantId = req.body._id;
  if(restaurantId !== null)
  {
    restaurantModel.remove({_id : restaurantId}, function(err,users){
      if(err)
      {
        res.send(err);
      }
      else {
          res.send('Deleted the id '+restaurantId+' successfully');
        }
    });
  }
});


//deleting all restaurants
router.delete('/deleteall', function(req, res) {
    restaurantModel.remove({}, function(err,users){
      if(err)
      {
        res.send(err);
      }
      else {
          res.send('Deleted all the restaurants successfully');
        }
    });
});

module.exports = router;
