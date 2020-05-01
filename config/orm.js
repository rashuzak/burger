// Import `connection.js` into `orm.js` (Import MySQL connection).
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
// Methods that will execute the necessary MySQL commands in the controllers. 
// To retrieve and store data in database.

var orm = {
    selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  insertOne: function(tableInput, columnName, burgerName, cb) {
    var queryString = "INSERT INTO ?? (??) Values (?)";
    connection.query(queryString, [tableInput, columnName, burgerName], function(err, res) {
      if (err) {
        throw err;
      }

      cb(res);
    });
  },
  
  updateOne: function(tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

    console.log(queryString);
    connection.query(queryString, [tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal], function(err, res) {
      if (err) {
        throw err;
      }

      cb(res);
    });
  }
  
};

// Export the orm object for the model (burger.js). (in `module.exports`).
module.exports = orm;
