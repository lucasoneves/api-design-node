const http = require('http');


const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.end('Hello, world!');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000 !!!!!!!');
});