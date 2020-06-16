const Koa = require('koa');
const Router = require('koa-router');

let server = new Koa();
server.listen(8080);

server.keys = [
    'faaaaaaaaaaaaaaasdfasdfasf',
    'fasdfasodfnalsfdhlasfkj',
    'ffasdjfnasniodfuhaspodf'
]

server.use(async ctx => {
   // ctx.cookies.set('name','zs',{signed: true})
   console.log(ctx.cookies.get('name', {signed: true}));
})