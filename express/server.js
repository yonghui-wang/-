const express = require('express');
const server = express();  // 生成express实例 实现服务端server,

// 路由监听 可复用
server.get('/a', (req,res, next) => {
    console.log('a');
    req.userType = 5;
    throw new Error('err')
    next()
})

server.get('/a', (req,res, next) => {
    console.log(req.userType);
})


// 服务运行在8080 端口 
server.listen(8080, () => {
    //  成功之后执行回调
    console.log('server runing at http://127.0.0.1:8080/');
})
