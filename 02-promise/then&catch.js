new Promise((resolve, reject) => {
    console.log('初始化')
    resolve(1212)
    // or
    // reject(1212)
}).then((data) => {
    console.log('收到值'+data)
    throw new Error('有异常')
    console.log('哪里有异常')
}).catch((e) => {
    console.log('收到异常')
    console.log(e)
}).then(() => {
    console.log('还能继续执行吗？')
})

// resolve打印
// 初始化
// 收到值1212
// 收到异常
// e.message === '有异常'
// 还能继续执行吗？

// reject打印
// 初始化
// 收到异常
// 1212
// 还能继续执行吗？