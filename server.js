const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interact with MongoDB
const api = require('./server/routes/api');

// Parses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    { extended: false }
));

// Angular DIST output folder path
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);

// Send all the other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Set port
const port = process.env.PORT || '3000';
app.set('port', port);

// Set server constant 
const server = http.createServer(app);

server.listen(port, () => console.log(`Running server on localhost:${port}`));




