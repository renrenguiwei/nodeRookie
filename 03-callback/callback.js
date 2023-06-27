function delay(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, time)
    })
}

delay(1000)
    .then(function step1() {
        console.log('step1')
        foo.bar() // 出错地方
        return delay(1000)
    })
    .then(function step2() {
        console.log('step2')
    }, function errorCatch(e) {
        console.log(e) // 错误捕获
    })
    .then(function step3() {
        console.log('step3')
        return delay(1000)
    })
    .then(function step4() {
        console.log('step4')
    })