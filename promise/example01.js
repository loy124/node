// 생성자를 통해서 프로미스 객체를 만들 수 잇다
// 생성자의 인자로 executor라는 함수를 이용한다

//new Promise( /* excutor*/ (resolve, reject) => {});
// excutor 함수는 resolve와 reject를 인자로 가진다

// 생성자를 통해서 프로미스 객체를 만드는순간 pending(대기)상태라고 한다

//new Promise((resolve, reject) => {}); //pending

new Promise((resolve, reject) => {
    //
    //...
    // resolve 함수를 실행하면 fulfilled(이행) 상태가된다
    resolve(); //fullfilled
    // reject 함수를 실행하면 rejected (거부) 상태가 됩니다
    reject(); // rejected
});