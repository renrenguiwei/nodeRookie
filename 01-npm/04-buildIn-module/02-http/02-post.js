const http = require('http')
const https = require('https')
const querystring = require('querystring')
const logger = require('../../../utils/log')

const server = http.createServer((request, response) => {
    // 接收数据
    let data = ''
    request.on('data', (chunk) => {
        data += chunk
    })

    // 接收完成
    request.on('end', () => {
        data = JSON.stringify(querystring.parse(data))
        // 发送给三方接口
        const options = {
            protocol: 'http:',
            hostname: 'localhost',
            method: 'post',
            port: 3000,
            path: '/data',
            headers: {
                'content-type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            }
        }
        // 建立连接
        const post = http.request(options, (result) => {})
        // 写入数据给3000端口
        post.write(data)
        post.end()

        response.end()
    })
})

server.listen(8999, () => {
    console.log('localhost:8999')
})