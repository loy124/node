'use strict';

// const obj = {
//     title: 'node.js 공부 시작',
// };

// const isEmptyObj = () => (obj.title ? true : false);

// isEmptyObj();

// const arr = [2, 3, 4];
//Object.keys
//Object.value

//조건을 만족하면 true/false 반환
//두가지이상 조건이 있을경우 every가 유용하다
// const isBiggerThenOne = arr.every((key) => key > 2);
// console.log(isBiggerThenOne);

// const arr = ['node.js', '공부'];

// //find는 실제 데이터 리턴
// //
// const ret = arr.find((key) => key === '공부');
// console.log(ret);

// //포함되어있는지 조건을 리턴
// const res = arr.includes('공부');
// console.log(res);

// const arr = [1, 2, 3];
// const newArr = [];

// // arr.forEach((item) => console.log(item));
// arr.forEach((item) => {
//     newArr.push(item);
// });

// console.log(newArr);

// const a = [1, 2, 3];
// const b = a.map((x) => x + 1);

// console.log(b);

// const obj = {
//     title: '노드',
// };

// const newObj = {
//     name: '자바스크립트',
// };
// 객체 합치기
// const ret = Object.assign({}, obj, newObj);

// console.log(ret);

// const ret = {
//     ...obj,
//     ...newObj,
// };
// const arr = [1, 2, 3];
// const newArr = [4, 5, 6];
// const res = [...arr, ...newArr];

// const test = new Set();

// test.add(1);
// test.add(1);
// test.add(2);
// test.add(2);
// test.add(3);

// for (const item of test) {
//     console.log(item);
// }

// const ret = test.has(2);
// console.log(ret);

// const arr = [1, 2, 0, -1, -2];

// const res = arr.some((key) => key < 0);
// console.log(res);

// const details = `자세한 내용 `;
// let str = `node.js`;
// str += `test${details}`;
// console.log(str);

// let string = 'node.js';
// let isStart = string.startsWith('n');
// let isInclude = string.includes('node');
// let iusEnd = string.endsWith('s');
// console.log(isStart);
// console.log(isInclude);
// console.log(iusEnd);

// try {
//     a;
// } catch (e) {
//     // console.log(e);
// }
// console.log('a');

// const add = (var1, var2) => var1 + var2;
// console.log(add(1, 2));

// Curried Function 커링함수

// function getDiscount (price, rate){
//     return price * rate
// }

//커링함수를 구현해보자
//1. 할인을 구현하는 메소드를 작성하기
//2. 퍼센트를 집어넣고 고정시키는 cur메소드 작성
//3. 실행
// const getDiscount = (price, rate) => price * rate;

// const getTenpercentOff = 0.1;
// getDiscount(10000, 0.1);

// const cur = (price) => getDiscount(price, getTenpercentOff);

// console.log(cur(5000));

// const dis = (rate) => (price) => price * rate;

// console.log(dis(getTenpercentOff)(5000));

// 캐시를 관리하기위해
//캐시매니저 혹은 db매니저를 관리하기위해 주로 class를 사용한다.

// class cacheManager {
//     //생성자
//     //비동기 문법을 사용할 수 없다
//     constructor() {
//         this.config = [];
//     }

//     addConfig(obj = {}) {
//         this.config.push(obj);
//     }

//     getConfig() {
//         return this.config;
//     }
// }

// const CacheManager = new cacheManager();
// CacheManager.addConfig({
//     port: 8000,
// });

// console.log(CacheManager);

// class test {
//     constructor() {
//         this.config = {};
//     }

//     fn() {}

//     static call() {
//         // this.config static메소드는 contructor의 객체에 접근이 불가능하다
//     }
// }

// const obj = {
//     title: 'node.js',
//     value: '올인원 패키지',
// };

// const { title, value } = obj;
// console.log(title, value);
// const arr = [0, 1, 2];
// const [, a, b] = arr;
// console.log(a);
// const title = obj.title
// const value = obj.value

//generator는 yield 해당하는 조건이 변할때마다를 전제로 둔다
//return

//generator는 arrow function 사용이 불가능하다.
// function* log() {
//     console.log(0, yield);
//     console.log(1, yield);
//     console.log(2, yield);
// }

// const gen = log();
// gen.next('zero');
// gen.next('first');
// gen.next('second');

// const obj = {
//     * gen() {
//         let cnt = 0;
//         yield ++cnt;
//         yield ++cnt;
//         yield ++cnt;
//     },
// };

// const g = obj.gen();

// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// const timeOutObj = setTimeout(() => {
//     console.log('first');
// }, 1000);

// const immediateOutObj = setImmediate(() => {
//     console.log('second');
// });

// const intervalObj = setInterval(() => {
//     console.log('third');
// }, 1000);

// clearTimeout();

// clearImmediate(immediateOutObj);

// clearInterval(intervalObj);

// const EventEmitter = require('events');

// class ChatManager extends EventEmitter {}

// const chatManager = new ChatManager();

// chatManager.on('join', () => {
//     console.log('new user joined');
// });

// //유저가 입장했을때 join 이벤트를 출력
// chatManager.emit('join');

// const dns = require('dns');

// //address:주소 family : ip 버전 (ipv4 or ipv6)
// dns.lookup('test.com', (err, address, family) => {
//     console.log(`address: ${address}, ${family}`);
// });

// //지정된 유형에 따라 레코드 유형의 배열을 반환한다
// dns.resolve4('archive.org', (err, addresses) => {
//     if (err) throw err;

//     const res = JSON.stringify(addresses);
//     console.log(res);

//     addresses.forEach((a) => {
//         // 지정된 IP주소의 도메인 명을 찾아낸다
//         dns.reverse(a, (err, hostnames) => {
//             if (err) throw err;

//             console.log(`reverse for ${a}; ${JSON.stringify(hostnames)}`);
//         });
//     });
// });

// const fs = require('fs');
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// const content = 'something to write';
// fs.writeFile('test.txt', content, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
// });
//promisfy를 사용하면 비동기로 돌리려는 함수를 promise로 감싸지 않고 사용할 수 있다.
// const promistfy = require("util").promisify;
// const { promisify } = require('util');

// //callback함수가 promise로 변경
// const write = promisify(fs.writeFile);
// const read = promisify(fs.readFile);

// const writeAndRead = async(data = '') => {
//     try {
//         await write('test.txt', data);

//         return await read('test.txt');
//     } catch (e) {
//         console.error(e);
//     }
// };

// writeAndRead('테스트입니다');
// writeAndRead();

// const promise1 = new Promise((resolve, reject) => resolve('즉시 호출'));
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('3초 뒤에 호출'), 3000);
// });

// Promise.all([promise1, promise2]).then((values) => console.log(values));

// const res = Promise.race([promise1, promise2]).then((value) =>
//     console.log(value),
// );

// if (res === undefined) {}

// //http 내장모듈 불러오기
// const http = require('http');

// //서버 생성
// const server = http.createServer((req, res) => {
//     //요청에 대한 어떠한 결과
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<div>Hello World</div>');
// });
// //개발포트
// // const port = process.env.PORT;
// const port = 8090;
// server.listen(port, () => {
//     console.log(`Server running at port ${port}`);
// });
// http 와 https 의 차이점: 모든 교류간에 ssL프로토콜이 같이 동작 (암호화)

// const https = require('https');
// const options = {
//     hostname: 'google.com',
//     //일반적인 https의 기본 포트는 443이다
//     port: 443,
//     path: '/login', // google.com/login
//     method: 'GET',
// };

// const req = https.request(options, (res) => {
//     console.log(`statudCode : ${res.statusCode}`);

//     res.on('data', (d) => {
//         //standardout
//         process.stdout.write(e);
//     });

//     req.on('error', (e) => {
//         console.log(error);
//     });
// });

// function fullstack(backend, frontend) {
//     this.backend = backend;
//     this.frontend = frontend;

//     fullstack.prototype.getBackend = () => this.backend;
//     fullstack.prototype.setBackend = () => (this.backend = backend);

//     fullstack.prototype.getFrontend = () => this.frontend;
//     fullstack.prototype.setFrontend = () => (this.frontend = frontend);
// }

// const Fullstack = new fullstack('javascript', 'javascript');

// console.log(Fullstack.getBackend());
// console.log(Fullstack.getFrontend());

// class fullStack {
//     constructor(backend, frontend) {
//         //async 사용불가
//         this.backend = backend;
//         this.frontend = frontend;
//     }

//     getBackend() {
//         return this.backend;
//     }

//     getFrontend() {
//         return this.frontend;
//     }

//     setBackend(backend) {
//         this.backend = backend;
//     }

//     setFrontend(frontend) {
//         this.frontend = frontend;
//     }
// }

// const FullStack = new fullStack('javascript', 'javascript');

// console.log(FullStack.getBackend());
// console.log(FullStack.getFrontend());

// function study(value1, value2) {
//     this.value1 = value1;
//     this.value2 = value2;

//     // this.prototype.func1을 안하려고 한경우

//     //arrow function이라 오류가 없는것 처럼 보인다
//     this.func1 = () => {
//         console.log;
//     };
//     //오류가 난다
//     // this.func2() {
//     //     console.log(this)
//     // }
// }

// const problem = new study(undefined, undefined);
// problem.func1();

// //함수도 객체로 취급이 되기때문에
// //메모리상에 계속 남아있는다
// //내부의 클로저함수를 계속 가지고있으니 클로저안에 클로저를 호출한다
// console.log(problem.func1());

// const numbers = [10, 20, 30, 40];

// //reduce를 사용하는 대부분의 경우 각각의 배열의 요소를 하나하나씩 접근을 할수 있다.

// const sum = numbers.reduce((tot, val) => {
//     console.log(`tot: ${tot}`);
//     console.log(`val: ${val}`);
//     return tot + val;
// });
// console.log(sum);

// const avg = numbers.reduce((tot, val, idx, arr) => {
//     console.log(`tot: ${tot}`);
//     console.log(`val: ${val}`);
//     console.log(`idx: ${idx}`);
//     console.log(`arr: ${arr}`);
//     tot += val;
//     //index는 0부터시작하지만 arr은 1부터시작하기때문에 1을빼준다
//     //index가 끝일때
//     if (idx === arr.length - 1) {
//         return tot / arr.length;
//     } else {
//         return tot;
//     }
// });

// console.log(avg);

// const numbers = [0, 1, 2, 3, 4, 5, 6];

// //새로 배열담기
// const res = numbers.reduce((tot, amt) => {
//     if (amt > 0) tot.push(amt);
//     return tot;
// }, []);

// console.log(res);

// const arr = ['pdf', 'html', 'html', 'gif', 'gif', 'gif'];
// //반복된 횟수를 객체로 반환하라
// const res = arr.reduce((total, current) => {
//     console.log(`total = ${JSON.stringify(total)}`);
//     console.log(`current = ${JSON.stringify(current)}`);

//     // total[current] = (total[current] || 0) + 1;
//     total[current] = (total[current] || 0) + 1;
//     console.log(total[current]);

//     return total;
// }, {});

// console.log(res);
// 싱글톤

// class CacheManager {
//     constructor() {
//         //instance가 존재하지 않을때만 초기화된다.
//         if (!CacheManager.instance) {
//             //내부 캐쉬기때문에 외부에서 접근할 필요가없다
//             this._cache = [];
//             CacheManager.instance = this;
//         }
//         return CacheManager.instance;
//     }
// }

// const instance = new CacheManager();
// Object.freeze(instance); //단일 최초 한번만 생성하는 싱글톤 패턴

//Adapter 패턴
// class 의 인터페이스를 사용자가 기대하는 인터페이스로 변환
// 기존에 있던 구조를 새구조로 유연하게 전호나하거나 새 구조에서 기존의 구조로 전환하는데 사용

//브릿지 패턴 (테마적용등에 사용한다)

// 데코레이터패턴 주어진 사용및 상태에따라 책임을 덧붙이는패턴

// Composite 패턴 객체들의 관계를 트리구조로 하여 사용자가 단일객체와 복합객체를 다룰수 있게한다

// class Sample {
//     // gen() {
//     //         let cnt = 0;
//     //         yield ++cnt;
//     //     }
//     // Computed Property
//     //그때그때 다르게 생성자를 정의 가능하다
//     //Array안이기때문에
//     *
//     [Symbol.iterator]() {
//         let cnt = 0;
//         yield ++cnt;
//         yield 1;
//     }
// }

// const fn = new Sample();
// // const gen = fn.gen();

// // console.log(gen.next());
// //반복 가능한 객체를 얕게 복사해 새로운 Array객체를 만든다;
// console.log(Array.from(Sample));

// class DatabaseManager {
//     constructor(settings) {
//         this.settings = settings;
//         this.init = init(); // Promise cache 한번 호출이 되어서 resolve된 Promise는 두번 호출되지 않는다.
//     }

//     query() {
//         // db 구현체 호출
//         // QUERY('') Agnostic
//     }

//     //해당 init은 async상태로 되어있다
//     async init() {} // 최초 1회만 실행

//     async newMember() {
//         //pending
//         await this.init(); // this.init을 async상태로 해서
//     }

//     async deleteMembet() {
//         await this.init(); //한번 resolve되면 다른 함수에서 호출해도 init이 두번이상 되지 않는다.
//     }
// }

//static factory method 패턴의 핵심은
// 기존의 contructor에서 async await를 사용하지 못하기때문에 과감히 버리고
// 생성하는 기능을 static method를 실행(new 키워드 없이)
// class DatabaseManager {
//     constructor() {}

//     static async BUILD(settings) {
//         const config = await this.init(settings); //setting을 해주고 이를바탕으로 return을 실행
//         //수행하고자 하는 모든 비동기 작업
//         return new DatabaseManager(config);
//         // return new DatabaseManager([Promise]);
//     }

//     query() {
//             // db 구현체 호출
//             // QUERY('') Agnostic
//         }
//         //해당 init은 async상태로 되어있다
//     async init(settings) {} // 최초 1회만 실행

//     async newMember() {}

//     async deleteMembet() {}
// }

// const manager = DatabaseManager.BUILD('settings');
//static factory method

// const co = require('co');

// //손쉽게 제네레이터를 활용
// co(function*() {
//     const a = Promise.resolve(1);
//     const b = Promise.resolve(1);
//     const c = Promise.resolve(1);

//     const res = yield [a, b, c];
//     console.log(res);
// });

// const aa = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((it) => 10 - it);
// console.log(aa);

// // [Promise1, Promise2].map (item => {
// //     //비동기 코드
// //     //어떠한 함수가 먼저 완료가 되는지 알수없다
// //     //map 함수안에 async await를 사용하면 안된다
// //     //새로운 closure를 생성하기때문에
// // })

// const arr = [Promise1, Promise2];

// arr.forEach(item => {

// });

// for(const item of arr){
//     // 비동기 코드 가능
// }
// class Lock {
//     constructor() {
//         //경쟁상태를 만들지 않기 Lock
//         //내부에서만 사용하는 변수나 함수는 _를 붙인다
//         //경쟁을 할수 없는 상태 = _locked
//         this._locked = false;
//         //대기열에 들어간 상태
//         this._waiting = []
//     }

//     lock() {
//         const unlock = () => {
//             let nextResolve
//             if (this._waiting)
//         }
//     }
// }

// let total = 0;

// async function getTotal() {
//     return total;
// }

// async function setTotal(value) {
//     return value;
// }

// async function increment(value, incre) {
//     return value + incre;
// }

// async function add() {
//     let current, newValue;
//     current = await getTotal();
//     newValue = await increment(current, 20);
//     await setTotal(newValue);
// }

// async function main() {
//     let transaction1, transaction2; //두개 이상의 데이터가 하나의 add 함수에 대해 동일하게 호출 (경쟁상태, Race Condition)
//     transaction1 = add();
//     transaction2 = add();

//     await transaction1;
//     await transaction2;
//     console.log(await getTotal());
// }