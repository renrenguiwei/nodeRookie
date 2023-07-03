/*
let gimmeSomething = (function () {
    let nextVal;

    return function () {

        if (nextVal === undefined) {
            nextVal = 1;
        } else {

            nextVal = (3 * nextVal) + 6;
        }

        return nextVal;

    };
})();

console.log(gimmeSomething())
console.log(gimmeSomething())
console.log(gimmeSomething())
console.log(gimmeSomething())*/

/*
let a = [1,3,5,7,9]
let it = a[Symbol.iterator]()
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
*/

function *something() {

    let nextVal;
    while (true) {
        if (nextVal === undefined) {
            nextVal = 1;
        } else {
            nextVal = (3 * nextVal) + 6;
        }
        yield nextVal; // 回传参数通信

    }

}

for (let v of something()) {
    console.log(v); // 打印nextVal数据

    // 不要死循环！
    if (v > 500) {
        break;
    }

}














