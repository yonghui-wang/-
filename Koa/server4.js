const Koa = require('koa');
const Router = require('koa-router');

let server = new Koa();
server.listen(8080);
server.context.a = '123'

let router = new Router();

router.get('/news/', async ctx => {
    const {id} = ctx.query;
    ctx.body = 'aaa' + ctx.a;
})

server.use(router.routes());