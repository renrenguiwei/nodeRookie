const querystring = require('querystring')

const params = 'username=claus&pwd=111111'

console.log(JSON.stringify(querystring.parse(params)))


