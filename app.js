var http = require('http')

doSomething = function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'})
	response.end('Hello World of Nodejs')
}
http.createServer(doSomething).listen('8050')