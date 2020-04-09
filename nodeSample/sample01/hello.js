// let a = 10;
// let str = '타이거즈';

// console.log('%d', a);
// console.log('%s', str);

// console.log('Hello' + str + ' node js');

// let person = {};

// person{'age'] = 2, age:26};

// let person = {};
// person['name'] = '홍길동';
// person.mobile = '010-0000-0000';

// console.log('나이: %d', person.age);
// console.log('이름: %s', person.name);
// console.log('전화번호: %s', person['mobile']);

// console.log(aaaaaaa);

function multi(a, b) {
    return a * b;
}

let c = multi(10, 20);
console.log('%d * %d = %d', 10, 20, c);

let Human = {
    age: 25,
    name: '홍길동',
    multi(a, b) {
        return a * b;
    },
};

console.log(Human.multi(5, 10));

let Users = [
    { name: '홍길동', age: 24 },
    { name: '일지매', age: 21 },
];

Users.forEach(li => console.log(li.name));

Users.push({ name: '정수동', age: 26 });

Users.forEach(li => console.log(li.name));

/*
push(Object) 추가
pop() 배열의 끝의 요소를 삭제
unshift() 배열의 앞에 요소를 추가
shift 배열의 앞에 요소를 삭제
splice 여러개의 요소를 추가/삭제
slice 여러개의 요소를 취득하여 새로운 배열을 만든다

*/