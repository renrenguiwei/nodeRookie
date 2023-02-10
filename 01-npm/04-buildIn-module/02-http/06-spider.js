const http = require('http')
const https = require('https')
const cheerio = require('cheerio')

const server = http.createServer((request, response) => {
    https.get('https://m.meizu.com/', (result) => {
        let data = ''
        result.on('data', (chunk) => {
            data += chunk
        })

        result.on('end', () => {
            filterData(data)
        })
    })
})

function filterData(data) {
    const $ = cheerio.load(data)
    $('.products-name').each((index, ele) => {
        console.log($(ele).text())
    })
}

server.listen(8999, () => {
    console.log('http://localhost:8999')
})