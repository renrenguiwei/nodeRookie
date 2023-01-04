const axios = require('axios')

axios.get('https://5b87b1cd35589600143c1440.mockapi.io/api/v1/list')
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })