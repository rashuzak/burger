// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//`burger.js` creates a code that will call the ORM functions using burger specific input for the ORM.
// We pass in query parameters as required by our ORM and also a callback to receive data
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  insertOne: function(burgerName, cb) {
    orm.insertOne("burgers", "burger_name", burgerName, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", "devoured", 1, "id", burgerId, function(res) {
      cb(res);
    });
  }
  
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
