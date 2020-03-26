//<< 서버 설정 >>
const http = require('http');

// web server create
const server = http.createServer();

//port number 세팅(binding)

const port = 8000; //우리가 만들어줌
server.listen(port, function() {
    console.log('server start: %d', port);
});

server.on('connection', function(socket) {
    const addr = socket.address();
    console.log('client connnect : %s %d', addr.address, addr.port); //connetion통해 접근가능하도록 만들어놓음
});

server.on('request', function(req, res) {
    console.log('client 요청이 들어 왔습니다');

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<!DOCTYPE html>');
    res.write('<html>');

    res.write('<head>');
    res.write('<title>응답페이지</title>');
    res.write('</head>');

    res.write('<body>');
    res.write('<h1>Server로부터 응답입니다</h1>');
    res.write('</body>');

    res.write('</html>');
    res.end();
});