const express = require('express');
const server = express();

server.listen(8080);

// 静态资源托管要放到最后， 不影响接口访问
/* server.use(express.static('./static/')); */

// 接口访问
server.get('/a', (req,res,next) => {
    res.send('aaa')
}) 

// 接口访问
server.get('/b', (req,res, next) => {
    res.send('bbb')
})

server.use(express.static('./static/'));