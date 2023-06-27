let p1 = new Promise(function (resolve, reject) {
    reject('error is error')
})

p1.then(
    function fullfilled() {
        console.log(12)
    },
    function rejected(res) {
        console.log(res)
    }
)