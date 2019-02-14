var mysql      = require('mysql');
var inquirer = required("inquirer");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'icecream_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();


//CRUD - CREATE, READ, UPDATE, DELETE(DESTROY)

