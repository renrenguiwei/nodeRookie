const http = require('http')

const server = http.createServer((request, response) => {
    const url = `${request.socket.encrypted ? 'https' : 'http'}://${request.headers.host}${request.url}`;
    const myURL = new URL(url)
    const { pathname } = myURL
    const cb = myURL.searchParams.get('cb')

    switch(pathname) {
        case '/api/data':
            response.write(`${cb}('hello')`)
            break
        default:
            response.write('ok')
    }
    response.end()
})

server.listen(8999, () => {
    console.log('http://localhost:8999')
})
