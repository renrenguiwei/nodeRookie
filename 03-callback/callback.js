function delay(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, time)
    })
}

delay(1000)
    .then(function step1() {
        console.log('step1')
        return delay(1000)
    })
    .then(function step2() {
        console.log('step2')
    })
    .then(function step3() {
        console.log('step3')
        return delay(1000)
    })
    .then(function step4() {
        console.log('step4')
    })