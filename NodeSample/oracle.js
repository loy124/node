const oracledb = require('oracledb');
const util = require('./util');

oracledb.autoCommit = true;

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

        util.setConn(conn);
    },
);

module.exports = oracledb;