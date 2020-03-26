const http = require('http');
const fs = require('fs');
const express = require('express');
const oracledb = require('oracledb');
const ejs = require('ejs');

const app = express();

//오토 커밋 설정
oracledb.autoCommit = true;

const server = http.createServer(app);

let dbconn;

// Parameter
const bodyParser = require('body-parser'); // npm install body-parser
app.use(bodyParser.urlencoded({ extended: true })); //파라미터를 사용하기위한 설정

//db connection
oracledb.getConnection({
        user: 'hr',
        password: 'hr',
        host: 'localhost',
        database: 'xe',
    },
    function(err, conn) {
        if (err) console.log('접속실패 : ' + err);

        console.log('db접속 성공 ');

        dbconn = conn;
    },
);

app.get('/', function(req, res) {
    fs.readFile(__dirname + '/write.html', function(err, data) {
        if (err) console.log();
        console.log('write.html 접속 성공');

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(data);
        res.end();
    });
});

app.post('/regist', function(req, res) {
    console.log('/regist 접속 성공');
    console.log(req);

    //parameter -> data 수집
    //write html의 name writer
    // req.getParameter
    const writer = req.body.writer;
    const title = req.body.title;
    const content = req.body.content;

    //req.params.writer get방식
    //post 방식일때는 body
    console.log('writer: ' + writer);
    console.log('title: ' + title);
    console.log('content: ' + content);

    dbconn.execute(
        "insert into notice(writer, title, content) values('" +
        writer +
        "', '" +
        title +
        "','" +
        content +
        "')",
        function(err, result) {
            if (err) {
                console.log('등록 중 에러 발생: ' + err);
            } else {
                console.log('등록 성공!');
                // list 이동
                res.redirect('list'); //SendRedirect
            }
        },
    );
});

app.get('/list', function(req, res) {
    console.log('/list 접속 성공');

    // db에서 산출
    // dbconn.execute('select * from notice',{}, {outFormat:oracledb.OBJECT} function(err, result) {
    dbconn.execute(
        'select * from notice', {}, { outFormat: oracledb.OBJECT },
        function(err, result) {
            if (err) {
                console.log('조회 중 에러 발생: ' + err);
            }
            console.log(result);
            console.log('result.rows:' + result.rows);

            // String 변경
            let json = JSON.stringify(result.rows);

            // 문자열을 json으로 변경
            let arr = JSON.parse(json);
            console.log(arr);

            fs.readFile(__dirname + '/list.ejs', 'utf-8', function(err, data) {
                if (err) console.log('읽기 실패' + err);

                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                // res.write(data);
                //리스트에 넘어갈때 data를 통해서 같이 가져가
                //짐을 가지고 이동하는부분
                res.end(ejs.render(data, { arrlist: arr }));
            });
        },
    );
});

server.listen(8000, function() {
    console.log('웹 서버 실행중...');
});