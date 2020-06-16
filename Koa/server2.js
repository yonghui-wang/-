const Koa = require('koa');
const Router = require('koa-router');

let server = new Koa();
server.listen(8080);

let router = new Router();
router.get('/news/:id/', async (ctx,next) => {
     let {id} = ctx.params;
     console.log(id);
     ctx.body = 'aaa';
     await next()  // 页面返回bbb
})
router.get('/news/1/', async (ctx) => {
    ctx.body = 'bbb'
})

server.use(router.routes());