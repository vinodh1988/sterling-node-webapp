

var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : '13.233.83.152',
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : 'sterling'
});

 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });
  

  module.exports=connection