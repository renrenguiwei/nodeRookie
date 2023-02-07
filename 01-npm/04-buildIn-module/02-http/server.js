const logger = require('../../../utils/log')
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((request, response) => {
    let data = ''
    request.on('data', (chunk) => {
        data += chunk
    })

    request.on('end', () => {
        response.writeHead(200, {
            'content-type': 'application/json;charset=utf-8'
        })
        logger.debug(data)
        response.write(JSON.stringify(querystring.parse(data)))
        response.end()
    })

})

server.listen(8999, () => {
    console.log('localhost:8999')
})

// node --inspect --inspect-brk server.js