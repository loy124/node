var http = require('http');
var fs = require('fs');

http
    .createServer(function(req, res) {
        // file read <- html
        fs.readFile(__dirname + '/demo.html', function(err, data) {
            //__dirname 현재 경로에 있는
            if (err) console.log(err); //err가 참일경우

            console.log('readfile success');
            if (req.method == 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.write(data);
                res.end();
            }
        });
    })
    .listen(8000);