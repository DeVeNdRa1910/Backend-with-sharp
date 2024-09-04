const http = require('http');
const fs = require('fs');

// Function to handle serving the form page
function handleFormRequest(res, message) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(`<body><h2>${message}</h2>`);
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
}

// Function to handle form submission and writing the message to a file
function handleFormSubmission(req, res) {
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', () => {
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split('=')[1].replace(/\+/g, ' ');
        fs.writeFileSync('message.txt', message);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    });
}

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
