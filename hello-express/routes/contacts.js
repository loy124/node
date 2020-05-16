const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('products 이후 url');
});

router.get('/list', (req, res) => {
    res.send('products list');
});

module.exports = router;