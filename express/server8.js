const express =require('express');
const cookieParser = require('cookie-parser');

let  server = express();
server.listen(8080);

server.use(cookieParser());

server.get('/a', (req,res) => {
    console.log(req.cookies); // 获取页面cookie

/*     res.cookie('a', 123, {   // 设置cookie值
        domain: '127.0.0.1',
        path: '/',
        maxAge: 14*86400*1000
    }) */
    res.send('success')
})

