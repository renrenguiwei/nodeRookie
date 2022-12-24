### nodejs学习 回归
> 2021-11-08 Beijing 今日雪后第二天，走1万步
* koa-mount 路由中间键处理
* koa-static html静态文件处理，例如：css、image
* nodemon nodejs文件更改无需重启node服务，非常方便`nodemon index.js即可`

####有问有答： 
1. 为何fs输出`index.html`文件后，`css、image`文件不生效？ 
   * 答：静态资源文件都指向`localhost:3000`，无法通过`./source/static`找到相对应的引用相对路径
