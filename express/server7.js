const express = require('express');
const multer = require('multer');

let server = express();
server.listen(8080);

server.use(express.static('./static/'));
let obj = multer({dest: './static/upload'}); // 定义上传目录
server.use(obj.any());  //  接收所有提交的数据


server.post('/reg', (req, res) => {
    console.log(req.files);
    res.send('upload successed!')
})

