//Require express
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Default the route to /burgers (Main Home Page)
router.get('/',function(req,res){
  res.redirect("/burgers");
});
// Get Burgers
router.get('/burgers',function(req,res){
  burger.selectAll(function(data){
      var hbsObject = { burgers: data };
      res.render('index',hbsObject);
  });
});
// Create Burger
router.post("/burgers/create",function(req,res){
  burger.insertOne(["burger_name"],[req.body.burger_name],function(result){
      res.redirect("/burgers");
  });
});
// Update Burger
router.put('/burgers/update/:id', function(req,res){
  var condition = `id = ${req.params.id}`;
  burger.updateOne({ 'devoured': req.body.devoured },condition,function(data){
      res.redirect('/burgers');
  });
});
// Export Router
module.exports = router;
