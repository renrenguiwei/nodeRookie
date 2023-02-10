const http = require('http')
const { createProxyMiddleware } = require('http-proxy-middleware')

// https://gate.lagou.com/v1/entry/positionindex/searchConditionData/version/760?md5=undefined&_t=1675996521238
const server = http.createServer((request, response) => {
    const urlStr = request.url
    const context = '/dp/getData'
    const proxyOptions = { target: 'https://mst.vip.com', changeOrigin: true }
    const proxyMiddleware = createProxyMiddleware(context, proxyOptions)
    // if (new RegExp(context).test(urlStr)) {
    if (urlStr.startsWith(context)) {
        proxyMiddleware(request, response)
    } else {
        console.log('error')

    }
})

server.listen(8999, () => {
    console.log('http://localhost: 8999')
})