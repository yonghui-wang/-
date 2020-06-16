const Koa = require('koa');
const Router = require('koa-router');

let server = new Koa();
server.listen(8080);

let router = new Router();

router.get('/news/',async ctx => {  // news/?id=1
    const {id} = ctx.query; 
    console.log(ctx.query);  // { id: '1' }
    ctx.body = '123'
})

server.use(router.routes())