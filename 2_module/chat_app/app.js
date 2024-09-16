const express = require('express');
const fs = require('fs');
const session = require('express-session');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

const filePath = 'message.txt';

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req, res) => {
    const { username } = req.body;
    if (username) {
        req.session.username = username; 
        res.status(200).send('Login successful'); 
    } else {
        res.status(400).send('Username is required');
    }
});

app.get('/message', (req, res) => {
    if (!req.session.username) {
        return res.redirect('/login.html'); 
    }
    res.sendFile(__dirname + '/views/message.html'); 
});

app.get('/getMessages', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading messages');
        }
        res.send(data || 'No messages yet.');
    });
});

app.post('/sendMessage', (req, res) => {
    const { message } = req.body;
    const username = req.session.username;

    if (!username) {
        return res.status(401).send('Unauthorized');
    }

    const newMessage = `${username}: ${message}\n`;

    fs.appendFile(filePath, newMessage, (err) => {
        if (err) {
            return res.status(500).send('Error saving message');
        }
        res.status(200).send('Message saved');
    });
});


app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});