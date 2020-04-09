//컨트롤러 역활을 한다.
const oracledb = require('oracledb');
const express = require('express');
const app = express.Router();

const session = require('express-session');

const db = require('../util');
const oracle = require('../oracle');

const bodyParser = require('body-parser'); // npm install body-parser
app.use(bodyParser.urlencoded({ extended: true })); //파라미터를 사용하기위한 설정

//session 설정
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
    }),
);

// link == Controller(+Dao)

app.get('/', function(req, res) {
    console.log('접속 성공');
    //바로 이동
    //file system을 사용하지 않아도 가능하다
    res.render('index.html');
});

app.get('/login', function(req, res) {
    console.log('/login 접속 성공');
    res.render('login.html');
});

app.get('/regi', function(req, res) {
    console.log('/regi 접속 성공');
    res.render('regi.html');
});

app.post('/idcheck', function(req, res) {
    console.log('/idcheck 접속 성공');
    //post 방식은 id
    const id = req.body.id;
    console.log(id);

    // db에서 산출

    // `selet count(*) from member where id = ${id}`
    const conn = db.getConn();
    conn.execute("SELECT COUNT(*) FROM MEMBER WHERE ID='" + id + "'", function(
        err,
        result,
    ) {
        if (err) console.log('db error');

        console.log('결과 = ' + result.rows);
        if (result.rows == 0) {
            res.send({ result: 'YES' }); // id 없음
        } else {
            res.send({ result: 'NO' }); // id 있음
        }
    });
});

app.post('/regiAf', function(req, res) {
    console.log('/regiAf 접속 성공');

    var id = req.body.id;
    var pwd = req.body.pwd;
    var name = req.body.name;
    var email = req.body.email;

    console.log(id + ' ' + pwd + ' ' + name + ' ' + email);

    var conn = db.getConn();

    //conn.execute("INSERT INTO MEMBER(ID, PWD, NAME, EMAIL, AUTH) VALUES('" + id + "', " + pwd + "', " + name + ", " + email + "', 3)", function(err, result) {
    conn.execute(
        'INSERT INTO MEMBER(ID, PWD, NAME, EMAIL, AUTH) VALUES(:id, :pwd, :name, :email, 3)', [id, pwd, name, email],
        function(err, result) {
            if (err) console.log('regiAf 에러 발생');

            console.log('insert 성공');
            res.redirect('login');
        },
    );
});

app.post('/loginAf', function(req, res) {
    console.log('/loginAf 접속 성공');
    const id = req.body.id; //req.query -> get
    const pwd = req.body.pwd;

    var conn = db.getConn();
    conn.execute(
        'SELECT ID, NAME, EMAIL, AUTH FROM MEMBER WHERE ID=:id AND PWD=:pwd', [id, pwd], { outFormat: oracle.OBJECT },
        function(err, result) {
            if (err) console.log('select error');

            console.log('result:' + result);

            if (result.rows != 0) {
                json = JSON.stringify(result.rows[0]);
                const arr = JSON.parse(json);
                console.log(arr);

                //세션 생성
                req.session.user_id = req.body.id;

                // 이동
                res.redirect('bbslist');
            } else {
                res.redirect('login');
            }
            /*
                                                                                    str = JSON.stringify(result.rows[0]);
                                                                                    let json = JSON.parse(str);
                                                                                    console.log(str);
                                                                                    console.log(json);
                                                                                    */
        },
    );
});

module.exports = app;