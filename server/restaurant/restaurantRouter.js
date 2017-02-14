'use strict';
const router = require('express').Router();
const RestaurantController = require('./restaurantController');


/* adding restaurants */
router.post('/add', function(req, res) {
    RestaurantController.add(req, res);
});


/* displays all the restaurant */
router.get('/displayall', function(req, res) {
  RestaurantController.displayall(req, res);
});

/* displays based on id */
router.get('/display/:id', function(req, res) {
  RestaurantController.displayid(req,res);
});


/* updating all the data */
router.put('/update', function(req, res) {
  RestaurantController.update(req, res);
});

/* deleting particular restaurant based on id */
router.delete('/deleteid', function(req, res) {
  RestaurantController.deleteid(req, res);
});

module.exports = router;
