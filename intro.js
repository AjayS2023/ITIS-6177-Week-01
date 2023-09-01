const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World, this is a simple Node server');
})

server.listen(port, hostname, () => {
    console.log(`The server is running on https//${hostname}:${port}/`);
});