const express=require('express');
const querystring = require('querystring');

let server=express();
server.listen(8080 ,() => {
    console.log('http://127.0.0.1:8080');
});
server.use(express.static('./static/'));

server.use((req,res,next) => {
    let arr = [];
    req.on('data', (buffer) => {
        arr.push(buffer)
    });
    req.on('end', () => {
        console.log(Buffer.concat(arr).toString()); // user=123&password=321

        let post = querystring.parse(Buffer.concat(arr).toString());
        req.body = post;
        next();
    })  
})

server.post('/reg', (req, res)=>{
    console.log(req.body);  //{ user: '123', password: '321' }
});

