/**
 * polyfill yield实现原理，更好的理解yield
 */
function foo(url) {

    // 管理生成器状态
    let state;

    // 生成器变量范围声明
    let val;

    function process(v) {

        switch (state) {
            case 1:

                console.log('requesting:', url);
                return request(url);
            case 2:

                val = v;

                console.log(val);
                return;
            case 3:

                let err = v;
                console.log('Oops:', err);
                return false;

        }

    }

    // 构造并返回一个生成器
    return {
        next: function(v) {
            // 初始状态
            if (!state) {

                state = 1;

                return {
                    done: false,
                    value: process()
                };

            } // yield成功恢复
            else if (state === 1) {

                state = 2;

                return {
                    done: true,
                    value: process(v)
                };

            }
            // 生成器已经完成
            else {

                return {

                    done: true,

                    value: undefined,

                };
            }

        },
        "throw": function(e) {
            // 唯一的显式错误处理在状态1
            if (state === 1) {

                state = 3;

                return {
                    done: true,
                    value: process(e)
                };
            } // 否则错误就不会处理，所以只把它抛回 else {

            throw e;
        }

    }

}