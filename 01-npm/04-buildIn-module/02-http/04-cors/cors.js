const http = require('http')

const server = http.createServer((request, response) => {
    const url = `${request.socket.encrypted ? 'https' : 'http'}://${request.headers.host}${request.url}`;
    const myURL = new URL(url)
    const { pathname } = myURL
    const cb = myURL.searchParams.get('cb')

    switch(pathname) {
        case '/api/data':
            response.writeHead(200, {
                'content-type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            })
            response.write(JSON.stringify({name: 'claus', sex: 'man'}))
            break
        default:
            response.write('ok')
    }
    response.end()
})

server.listen(8999, () => {
    console.log('http://localhost:8999')
})
