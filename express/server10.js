const express = require('express');
const cookieSession = require('cookie-session');

let server = express();
server.listen(8080);

server.use(cookieSession({
    keys: ['fasdddddddddddddddddddddjalskdf'],
    maxAge: 20 * 60 * 1000
}))

server.get('/a', (req, res) => {
    if (!req.session['view']) {
        req.session['view'] = 1;
    } else {
        req.session['view']++
    }
    req.session['amount'] = 99.8;
    res.send(`欢迎你第${req.session['view']}访问本站，你的余额是${req.session['amount']}`)

})