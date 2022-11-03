require('dotenv').config();

const static = require('node-static');
const http = require("http");
const fs = require("fs");
const {
	NODE_HOST,
	NODE_PORT
} = process.env;

const fileServer = new static.Server('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
       const url = request.url;
       console.log(url);
            switch(url){
                case '/': 
                    fileServer.serve(request, response);
                break;
                case '/cars':
                    fileServer.serveFile('search.html', 200, {}, request, response);
                break;
                default:
                fileServer.serve(request, response, function (e, res) {
                    if (e && (e.status === 404)) {
                        fileServer.serveFile(
                            '/404.html', 404, {}, request, response
                        );
                    }
                });
            };
    }).resume();
}).listen(NODE_PORT, NODE_HOST, () => {
    console.log(
      `[nodemon] starting server on ${NODE_HOST}:${NODE_PORT}`
    );
});