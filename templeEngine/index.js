const vm = require('vm')

const user = {
    name: '<script/>'
}

const result = `<h2>${user.name}</h2>`

// const template = '<h2><%= user.name %></h2>'
// ejs.render(template, user)

const template = vm.runInNewContext(
    '`<h2>${_(user.name)}</h2>`', 
    {
        user,
        _: function (val) {
            return String(val)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/'/g, '&#39;')
                .replace(/"/g, '&quot;')
        }
    }
)
console.log(template) 
