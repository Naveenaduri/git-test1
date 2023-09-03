var http = require('http');
http.createServer(function (req, res) {
  res.write('Hello World from Venkata-Naveen-Aduri NodeJS!');
  res.end();
}).listen(3000, function(){
 console.log("Server running at port 3000");
 console.log("Added just for commit");

});
