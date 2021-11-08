// a new start
const koa = require('koa')
const mount = require('koa-mount')
const static = require('koa-static')
const fs = require("fs");

const app = new koa()

// 输出静态文件
app.use(
    static(__dirname + '/source/')
)

app.use(
    mount('/', (ctx) => {
        ctx.body = fs.readFileSync(__dirname + '/source/index.html', 'utf-8')
    })
);

app.listen(4000)