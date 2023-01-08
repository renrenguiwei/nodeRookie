/**
 * 如何利用脚本访问package.json的配置
 * 1. 将脚本写在.js文件内
 * 2. 写在script下
 */
console.log(process.env.npm_package_config_env)