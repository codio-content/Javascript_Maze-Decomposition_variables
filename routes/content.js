
var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();

// Width & Height
router.get('/b-1', function(req, res) {
  res.render('b-1');
}); 

// Width & Height Javascript
router.get('/js-1', function(req, res) {
  res.render('js-1');
}); 

// Create Empty Maze challenge
router.get('/js-1a', function(req, res) {
  res.render('js-1a');
});

// Width & Height Javascript using variables
router.get('/js-2', function(req, res) {
  res.render('js-2');
}); 

// Width & Height Javascript challenge fix var name
router.get('/js-3', function(req, res) {
  res.render('js-3');
}); 

// Create 3 walls, monsters, energies and add player - challenge
router.get('/js-4', function(req, res) {
  res.render('js-4');
}); 

// Multi variable challenge
router.get('/js-5', function(req, res) {
  res.render('js-5');
});

// One variable for all
router.get('/js-5a', function(req, res) {
  res.render('js-5a');
}); 

// One variable for all
router.get('/js-5b', function(req, res) {
  res.render('js-5b');
}); 


// Variable arithmetic
router.get('/js-6', function(req, res) {
  res.render('js-6');
}); 

// Variable arithmetic subtraction
router.get('/js-7', function(req, res) {
  res.render('js-7');
}); 

// Variable arithmetic multiplication
router.get('/js-8', function(req, res) {
  res.render('js-8');
}); 

// Variable arithmetic multiplication
router.get('/js-9', function(req, res) {
  res.render('js-9');
}); 

// Strings intro
router.get('/js-10', function(req, res) {
  res.render('js-10');
}); 

// Strings intro
router.get('/js-11', function(req, res) {
  res.render('js-11');
}); 

// String arithmetic
router.get('/js-12', function(req, res) {
  res.render('js-12');
}); 

// String arithmetic
router.get('/js-13', function(req, res) {
  res.render('js-13');
});

// challenge String arithmetic
router.get('/js-14', function(req, res) {
  res.render('js-14');
});

// Number + string
router.get('/js-15', function(req, res) {
  res.render('js-15');
});

module.exports = router;



