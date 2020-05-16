const express = require('express');
const router = express.Router();

function testMiddleware(req, res, next) {
    //해당 함수를 거치고 next를 통해 다음 함수로 넘겨준다
    console.log('첫번쨰 미들웨어');
    next();
}

function testMiddleware2(req, res, next) {
    //해당 함수를 거치고 next를 통해 다음 함수로 넘겨준다
    console.log('두번쨰 미들웨어');
    next();
}

// function loginRequired(req, res, next) {
//   if(로그인이 되어있지 않으면) {
//     res.redirect(로그인창으로)
//   }
//   else{
//     next();
//   }
// }

router.get('/', testMiddleware, testMiddleware2, (req, res) => {
    res.send('admin 이후 url');
});
// router.get('/', (req, res) => {
//     res.send('admin 이후 url');
// });

router.get('/products', (req, res) => {
    // res.send('admin procuts');

    res.render('admin/products.html', {
        message: `<h1>태그가출력됩니다.</h1>`,
        online: 'express',
    });
});

router.get('/products/write', (req, res) => {
    res.render('admin/write.html');
});

router.post('/products/write', (req, res) => {
    // res.send(req.body.name);
    res.send(req.body);
});

module.exports = router;