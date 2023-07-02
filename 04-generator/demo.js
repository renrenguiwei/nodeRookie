/*let x = 1

function *foo(){
    x++
    yield
    console.log('x:', x)
}

function bar() {
    x++
}

// 运行
let it = foo()
let aaa = it.next()
console.log(aaa)
console.log(x)
bar()
console.log(x)
aaa = it.next()
console.log(aaa)*/

// function *foo(x, y) {
//     return x * y
// }
//
// let it = foo(6, 7)
// let res = it.next()
// console.log(res.value)
/*
function *foo(x) {
    let y = x * (yield)
    return y
}

let it = foo(6)
it.next()
let res = it.next(7)
console.log(res.value)*/


// yield 与 next 双向通信
/*function *foo(x) {
    let y = x * (yield 'hello')
    return y
}

let it = foo(6)
const res1 = it.next()
console.log(res1)

const res2 = it.next(7)
console.log(res2)*/





















