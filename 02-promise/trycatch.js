function foo() {
    setTimeout(function () {
        baz.bar()
    }, 100)
}

try{
    foo()
}catch(e) {
    console.log(e)
}