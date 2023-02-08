const logger = require('../../../utils/log')
const http = require('http')
const https = require('https')
const querystring = require('querystring')

const get = http.createServer((request, response) => {

    https.get('https://test-cloud.chanjet.com/cc/ue3fykjdphvz/dzq2dxmksi/entities/TaxIndustry/list', (result) => {
        let data = ''
        result.on('data', (chunk) => {
            data += chunk
        })

        result.on('end', () => {
            response.writeHead( 200, {
                'content-type': 'application/json;charset=utf-8'
            })
            logger.debug(data)
            response.write(data)
            response.end()
        })
    })
})

get.listen(8999, () => {
    console.log('localhost:8999')
})

// node --inspect --inspect-brk get.js
// contributions