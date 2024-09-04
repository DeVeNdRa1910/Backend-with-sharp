const http = require('http');
const fs = require('fs');


// Function to handle form submission and writing the message to a file
exports.handleFormSubmission = function (req, res) {
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