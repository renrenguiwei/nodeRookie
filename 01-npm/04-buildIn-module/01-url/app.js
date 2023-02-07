const log4js = require("log4js");
log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } },
});

const logger = log4js.getLogger("cheese");
logger.level = 'debug'


const url = require('url')

const urlString = 'https://www.bilibili.com/video/BV1ca4y1n7u3/?p=15&spm_id_from=333.880.my_history.page.click&vd_source=2cc36b3fffba891a5e48db81cd83b8fd'
const urlObj =  {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.bilibili.com',
    port: null,
    hostname: 'www.bilibili.com',
    hash: null,
    search: '?p=15&spm_id_from=333.880.my_history.page.click&vd_source=2cc36b3fffba891a5e48db81cd83b8fd',
    query: 'p=15&spm_id_from=333.880.my_history.page.click&vd_source=2cc36b3fffba891a5e48db81cd83b8fd',
    pathname: '/video/BV1ca4y1n7u3/',
    path: '/video/BV1ca4y1n7u3/?p=15&spm_id_from=333.880.my_history.page.click&vd_source=2cc36b3fffba891a5e48db81cd83b8fd',
    href: 'https://www.bilibili.com/video/BV1ca4y1n7u3/?p=15&spm_id_from=333.880.my_history.page.click&vd_source=2cc36b3fffba891a5e48db81cd83b8fd'
}

// logger.debug(url.parse(urlString))
// logger.debug(url.format(urlObj))
// logger.debug(url.resolve('https://www.baidu.com/a', '../'))
// logger.debug(url.resolve('https://www.baidu.com/a', '/b'))

const urlParams = new URLSearchParams(url.parse(urlString).query)
const urlParams1 = new URLSearchParams(url.parse(urlString).search)
logger.debug(urlParams.get('p'))















