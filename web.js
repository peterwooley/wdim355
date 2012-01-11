var static = require('node-static');

var fileServer = new static.Server();

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
       fileServer.serve(request, response);
    });
}).listen(process.env.PORT || 80);