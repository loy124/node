const express = require('express');
const app = express();

const member = require('./router/member');

const bbs = require('./router/bbs');

const resource = require('./router/resource');
//위와 같다.
// const member = require(__dirname + '/member');

app.use(member);
app.use(bbs);
app.use(resource);

//views setting
// 경로지정을 해준다.
app.set('views', __dirname + '/views');

// res.render 메소드 에서 .ejs를 생략할수 있는 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const server = app.listen(8000, function() {
    console.log('웹서버 실행중');
});