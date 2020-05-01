// Dependencies
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

//Get request is to get contents from the database
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


//Post request is to add burger to the database
router.post("/", function(req, res) {
  console.log(req.body.burger_name);

  if(req.body.burger_name !== "") {
      burger.insertOne(req.body.burger_name.trim(), function() {
              res.redirect("/");
        });
    }
});  
   
// Put request is to update burger's status
router.put("/:id", function(req, res) {
  //var condition = "id = " + req.params.id;

  console.log("id: ", req.params.id);

  burger.updateOne(req.params.id, function () {
    res.redirect("/");
  });  
})


// Export routes for server.js to use.
module.exports = router;
