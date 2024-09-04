const http = require('http');
const fs = require('fs');

function rqListener(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.readFile('message.txt', (err, data) => {
            let message = 'No message yet!';  // Default message

            if (!err && data.length > 0) {
                message = data.toString();
            }

            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body><h2>${message}</h2>`);  // Display message here
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        });
    } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            let message = parseBody.split('=')[1].replace(/\+/g, ' ');

            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
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