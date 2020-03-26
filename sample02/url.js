console.log('url sample');

var url = require('url');

const addr = 'http://localhost:8090/default.html?year=2020&month=3';

const q = url.parse(addr, true);

//requre 소속
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

const qData = q.query;
console.log(qData);
console.log(qData.year);