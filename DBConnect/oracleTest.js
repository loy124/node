/*

  MySQL, MongoDB -> Node.js
  Oracle

*/
const oracledb = require('oracledb');

const config = {
    connectString: 'localhost/xe',
    user: 'hr',
    password: 'hr',
};

oracledb.getConnection(config, (err, conn) => {
    if (err) {
        console.log('접속에 실패했습니다', err);
        return;
    }
    console.log('접속 성공');
});