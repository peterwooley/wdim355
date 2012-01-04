var static = require('node-static');

var fileServer = new static.Server();

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
       //fileServer.serve(request, response);
    });
}).listen(process.env.C9_PORT || process.env.PORT || 80);