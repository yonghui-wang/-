const express = require('express');
const cookieParser = require('cookie-parser');

let server = express();
server.listen(8080);

server.use(cookieParser("fasdgfhsrtyredfbfd56te5645sdter76tytutyi456ythgfgerrhdfghfdg"));

server.get('/a', (req, res) => {
    console.log('cookie:', req.cookies);         //未签名的
    console.log('signed:', req.signedCookies);   //签名的

    res.cookie('aaa', '111', {
        maxAge: 14 * 86400 * 1000,
        //  httpOnly: true, //  document.cookies不可获取
        signed: true,
       // secure: true  // https
    })
    res.send('success!')
})