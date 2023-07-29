 //Create web server
 //Create a server object:
 const http = require('http');
 const url = require('url');
 const fs = require('fs');
 const path = require('path');
 const port = 8080;

 const server = http.createServer((req, res) => {
     //Parse the url
     var parsedUrl = url.parse(req.url, true);
     //Get the path
     var path = parsedUrl.pathname;
     //Trim the path
     var trimmedPath = path.replace(/^\/+|\/+$/g, '');
     //Get the query string as an object
     var queryStringObject = parsedUrl.query;

     //Get the http method
     var method = req.method.toLowerCase();

     //Send the response
     res.end('Hello World\n');

     //Log the request path
     console.log('Request received on path: ' + trimmedPath + ' with method: ' + method + ' and with these query string parameters ', queryStringObject);
 });

 //Start the server
 server.listen(port, () => {
     console.log('The server is listening on port: ' + port);
 });

 //Define a request router
 var router = {
     'sample': handlers.sample
 };

 //Define the handlers
 var handlers = {};

 //Sample handler
 handlers.sample = (data, callback) => {
     //Callback a http status code, and a payload object
     callback(406, {
         'name': 'sample handler'
     });
 };