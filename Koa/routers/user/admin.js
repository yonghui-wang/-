const Router = require('koa-router');
let router = new Router();

router.get('/a', async (ctx) => {
    ctx.body = 'admin下的a'
})

module.exports = router.routes();