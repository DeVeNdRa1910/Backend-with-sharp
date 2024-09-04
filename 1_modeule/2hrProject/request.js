const http = require('http');
const fs = require('fs');


// Function to handle serving the form page
exports.handleFormRequest = function (res, message) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(`<body><h2>${message}</h2>`);
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
}