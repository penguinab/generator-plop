const router = require('./router.js')

module.exports = function(plop){
    plop.setGenerator('router',router)

    // plop.setGenerator=('test',{
    //     description: '视图组件',
    //     prompts: [{
    //         type: 'input',
    //         name: 'name',
    //         message: '组件的名字, 如MyApp',
    //         validate: function (value) {
    //             if ((/([A-Z][a-z]+)+/).test(value)) { return true; }
    //             return '组件名称必须为驼峰形式';
    //         }
    //     }]
    // })
}