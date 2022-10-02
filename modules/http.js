const http = require('http');

http.createServer(router).listen(3000);

function router(request, response) {
    console.log('Request received');
    console.log(request.url);
    // response.writeHead(222, {'Content-Type': 'text/plain'});
    // response.write('Hello World');

    switch (request.url) {
        case '/hello':
            response.write('Hi');
            response.end();
            break;

        default:
            response.write('Error 404: Not found');
            response.end();
    }

    //response.end();
}

console.log('Server running at http://localhost:3000/');

