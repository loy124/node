// const foo = require('./foo.js'); //require == import
//외부의 변수를 가져다 쓸수 있는것이 requre입니다
const foo = require('./foo'); //require == import
const cal = require('./cal');

console.log(foo.aa);

num1 = 3;
num2 = 4;

console.log(cal.add(num1, num2));