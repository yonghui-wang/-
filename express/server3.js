const express = require('express');
const server = express();

server.listen(8080);

// 访问http://127.0.0.1:8080/a?a=1&b=2 
server.get('/a', (req,res,next) => {
    console.log(req.query); // { a: '1', b: '2' }
    res.send('aaa')
})
