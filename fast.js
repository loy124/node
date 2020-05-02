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

class cacheManager {
    //생성자
    //비동기 문법을 사용할 수 없다
    constructor() {
        this.config = [];
    }

    addConfig(obj = {}) {
        this.config.push(obj);
    }

    getConfig() {
        return this.config;
    }
}

const CacheManager = new cacheManager();
CacheManager.addConfig({
    port: 8000,
});

console.log(CacheManager);