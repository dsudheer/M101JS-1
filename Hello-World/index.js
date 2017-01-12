const http = require('http');
const port = 8000;

let server = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain" });
	response.end("Hello World! \n");
}).listen(port);

console.log(`Server running at http://localhost:${port}`);

