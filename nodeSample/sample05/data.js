//variable
const item = 'apple';
exports.item = item;

// function
const getName = function() {
    console.log(item + '입니다');
};
exports.getName = getName;

// Object
const obj = {
    name: 'banana',
    price: 2500,
    stroe: 'myMarket',
};

exports.obj = obj;