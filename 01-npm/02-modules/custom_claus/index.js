const _ = require('lodash')
function myChunk(arr) {
    let arr2 = _.chunk(arr, 2)
    console.log(arr2)
}

module.exports = myChunk