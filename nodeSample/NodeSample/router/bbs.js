//컨트롤러 역활을 한다.
const oracledb = require('oracledb');
const express = require('express');
const app = express.Router();

const session = require('express-session');

const db = require('../util');
const oracle = require('../oracle');

app.get('/bbslist', function(req, res) {
    console.log('/bbslist 접속 성공');
    console.log('session: ' + req.session.user_id);

    const conn = db.getConn();
    conn.execute(
        'SELECT SEQ, ID, REF, STEP, DEPTH, TITLE, CONTENT, WDATE, DEL, READCOUNT FROM BBS ORDER BY REF DESC, STEP ASC', {}, { outFormat: oracledb.OBJECT },
        function(err, result) {
            if (err) console.log('조회 실패');

            str = JSON.stringify(result.rows);
            // console.log(str);
            //
            const json = JSON.parse(str);
            //db안의 컬럼명대로 가져온다
            console.log(json[0].SEQ);

            res.render('bbslist.ejs', {
                user: req.session.user_id,
                datas: json,
            });
        },
    );
});

module.exports = app;