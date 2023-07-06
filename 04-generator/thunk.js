/*
// 粗略写法
function foo(x, y, cb) {
    setTimeout(function () {
        cb(x + y)
    }, 1000)
}

function fooThunk(cb) {
    foo(3, 4, cb)
}

fooThunk(function(sum) {
    console.log(sum)
})*/

// 参数混合过渡写法
/*
function foo(x, y, cb) {
    setTimeout(function () {
        cb(x + y)
    }, 1000)
}


function thunkify(fn) {
    let args = [].slice.call(arguments, 1)
    return function (cb) {
        args.push(cb)
        return fn.apply(null, args)
    }
}

thunkify(foo, 3, 4)(function (sum) {
    console.log(sum)
})*/


// 职责分离写法
function foo(x, y, cb) {
    setTimeout(function () {
        cb(x + y)
    }, 1000)
}

function thunkify(fn) {
    return function() {
        let args = [].slice.call(arguments)
        return function(cb) {
            args.push(cb)
            return fn.apply(null, args)
        }
    }
}

thunkify(foo)(3, 4)(function(sum) {
    console.log(sum)
})






















