const express=require('express');
const body = require('./lib/body-parser.js'); // 自定义body-parser中间件

let server=express();
server.listen(8080);

server.use(body.urlencoded());

server.post('/reg', (req, res) => {
    console.log(req.body);
})