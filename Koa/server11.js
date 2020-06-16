const Koa=require('koa');
const Router=require('koa-router');

let server=new Koa();
server.listen(8080);

// server.context.db=require('./libs/database');

server.use(async (ctx, next)=>{
  try{  // 捕获全局错误
    await next();
  }catch(e){
    ctx.body='错了';
  }
});


let router=new Router();

/* router.all('*', async ctx=>{
  try{
    await next();
  }catch(e){
    ctx.body='错了-router';
  }
}); */

router.get('/a', async ctx=>{
  ctx.body= div  // 故意写错
});

server.use(router.routes());
