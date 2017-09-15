var http = require('http');

http.createServer(function (req, res) {

	res.writeHead(200, {"Content-Type": "text/plain"})
	res.end("hello World\n")
}).listen(process.env.PORT)

//FANTOM

// var { Client } = require('pg');

// var client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });

// client.connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });





// function displayName () {

// 	 var name = document.getElementById("name");

// 	 document.getElementById("displayName") = name.value;
// }