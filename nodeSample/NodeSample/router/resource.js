const express = require('express');
const app = express.Router();
const fs = require('fs');

app.get('/arrow', function(req, res) {
    fs.readFile(__dirname + '/../image/arrow.png', function(err, data) {
        res.end(data);
    });
});

module.exports = app;