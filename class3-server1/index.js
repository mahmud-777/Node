var http = require('http');

var call = function(req,res){
res.write('Hello World');
res.end();
};

var server = http.createServer(call)

server.listen(8080);

console.log('serverislistig8080');
