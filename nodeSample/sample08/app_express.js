//내장 모듈
const http = require('http');
const fs = require('fs');

//모듈설치가 필요
const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(8000, function() {
    console.log('웹 서버 가동중...');
});

app.get('/', function(req, res) {
    console.log('/ 접속 성공');

    fs.readFile(__dirname + '/index.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(data);
        res.end();
    });
});

app.get('/main', function(req, res) {
    console.log('/ 접속 성공');

    fs.readFile(__dirname + '/main.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(data);
        res.end();
    });
});

// const let