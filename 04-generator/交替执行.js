let a = 1;

let b = 2;

function* foo() {
    a++;
    yield;

    b = b * a;

    a = (yield b) + 3;

}

function* bar() {
    b--;
    yield;

    a = (yield 8) + b;

    b = a * (yield 2);

}

function step(gen) {
    var it = gen();
    var last;

    return function () {
        // 不管yield出来的是什么，下一次都把它原样传回去！
        last = it.next(last).value;
    };
}

let s1 = step( foo );
let s2 = step( bar );
s2()
s2()
s1()
s2()

s1()

s1()
s2()

console.log(a, b)
