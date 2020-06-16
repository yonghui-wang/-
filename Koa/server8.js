const Koa = require('koa');
const Body = require('koa-better-body');

let server = new Koa();
server.listen(8080);

server.use(Body({
    uploadDir: './static/upload'
}))

server.use(async ctx => {
    console.log(ctx.request.fields);
    ctx.body = 'aaaa'
})
