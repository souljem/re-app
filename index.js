 function tape ()

 {
 	var http = require('http');

http.createServer(function (req, res) {

	res.writeHead(200, {"Content-Type": "text/plain"})
	res.write()
	res.end("hello World\n")
}).listen(process.env.PORT)
}

alert("tits");
//FANTOM

var { Client } = require('pg');

var client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});





// function displayName () {

// 	 var name = document.getElementById("name");

// 	 document.getElementById("displayName") = name.value;
// }