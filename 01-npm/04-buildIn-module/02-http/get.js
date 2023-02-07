const logger = require('../../../utils/log')
const http = require('http')

const server = http.createServer((request, response) => {
    const url = request.url

    response.writeHead(200, {
        // 'content-type': 'text/plain'
        'content-type': 'application/json;charset=utf-8'
    })
    // response.write('<div>claus</div>')
    response.write(`{"url": "${url}"}`)
    response.end()
})

server.listen(8999, () => {
    console.log('localhost:8999')
})

// node --inspect --inspect-brk get.js