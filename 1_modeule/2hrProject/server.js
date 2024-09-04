const http = require('http');
const fs = require('fs');
const handleFormRequest = require("./request");
const handleFormSubmission = require("./submit");


// Main request listener function
function rqListener(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.readFile('message.txt', (err, data) => {
            const message = !err && data.length > 0 ? data.toString() : 'No message yet!';
            handleFormRequest(res, message);
        });
    } else if (url === '/message' && method === 'POST') {
        handleFormSubmission(req, res);
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first node js page</title></head>');
        res.write('<body><h1>Hello from Node.js server</h1></body>');
        res.write('</html>');
        res.end();
    }
}

const server = http.createServer(rqListener);

server.listen(3000);
