const http = require('http');
const fs = require('fs');

// Function to handle the initial form request
function handleFormRequest(res, message) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(`<body><h2>${message}</h2>`);
    res.write(`<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
    res.write('</html>');
    res.end();
}

// Function to handle form submissions
function handleFormSubmission(req, res) {
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', () => {
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split('=')[1].replace(/\+/g, ' ');

        // Write the message to a file
        fs.writeFile('message.txt', message, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/html');
                res.write('<html><body><h1>Internal Server Error</h1></body></html>');
                return res.end();
            }

            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });
    });
}

// Main request listener function
function rqListener(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.readFile('message.txt', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/html');
                res.write('<html><body><h1>Internal Server Error</h1></body></html>');
                return res.end();
            }

            const message = data.length > 0 ? data.toString() : 'No message yet!';
            handleFormRequest(res, message);
        });
    } else if (url === '/message' && method === 'POST') {
        handleFormSubmission(req, res);
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first Node.js page</title></head>');
        res.write('<body><h1>Hello from Node.js server</h1></body>');
        res.write('</html>');
        res.end();
    }
}

const server = http.createServer(rqListener);

const port = 4040
server.listen(port, () => {
    console.log('Server is listening on port ', port);
});
