var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n');
}).listen(8080, 'APP_SERVER_PRIVATE_IP');
console.log('Server running at http://APP_SERVER_PRIVATE_IP_ADDRESS:8080/');