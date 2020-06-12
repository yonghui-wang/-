const express = require('express');
const bodyParser = require('body-parser');

const server = express();
server.listen(8080);

// server配置 bodyParser中间件  
// bodyParser.urlencoded({extended: false}) 返回的是一个函数 (req,res,next) => {  .... next ()}
server.use(bodyParser.urlencoded({extended: false}))

server.post('/reg', (req, res) => {
    // [Object: null prototype] { user: 'aaa', password: 'bbbb' }
    console.log(req.body); 
})  

server.use(express.static('./static/'));