function doSomething(successFun, failFun) {
    const a = 5042
    successFun(a)
}
function doSomethingElse(data, successFun, failFun) {
    successFun(data)
}
function doThirdThing(data, successFun, failFun) {
    successFun(data)
}

function failureCallback() {}

doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
        doThirdThing(newResult, function(finalResult) {
            console.log('Got the final result: ' + finalResult); // Got the final result: 5042
        }, failureCallback);
    }, failureCallback);
}, failureCallback);


