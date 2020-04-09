const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express();

const server = http.createServer(app);

// view를 설정
app.set('views', __dirname + '/views');

// css
const myCss = {
    style: fs.readFileSync(__dirname + '/css/style.cs', 'utf-8'),
};

app.get('/', function(req, res) {
    res.render('index.ejs', {
        title: '제목입니다',
        mycss: myCss,
    });
});

server.listen(8000, function() {
    console.log('웹 서버 동작중');
});