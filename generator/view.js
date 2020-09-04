const {judgeNameOnlyLetter} =require('./utils/util')
const {modules}=require('./config/module')
const exec = require('child_process').exec
module.exports=
{
    description:'添加常用页面',
    prompts:[
        // {
        //     type:'list',
        //     name:'moduleDir',
        //     message:'请输入文件添加到的模块',
        //     choices:modules
        // },
        // {
        //     type:'input',
        //     name:'ViewName',
        //     message:'页面名称,如roleLise',
        //     validate:(value)=>{
        //         return judgeNameOnlyLetter(value)||'请按约定输入正确view名称'
        //     }
        // },
        {
            type:'confirm',
            name:'hasVuex',
            message:'是否创建对应的VuexModule',
            default: false
        },
        {
            type:'input',
            name:'vuexModuleName',
            message:'vuex子模块名称',
            default:''
        },
        // {
        //     type:'confirm',
        //     name:'hasApi',
        //     message:'是否import对应的api并创建',
        //     default: true
        // },
        // {
        //     type:'confirm',
        //     name:'hasDialog',
        //     message:'是否引入Dialog组件',
        //     default: true
        // },
        // {
        //     type:'checkbox',
        //     name:'templateFuc',
        //     message:'包装组件功能选择',
        //     choices: [{
        //         name: '新增',
        //         value: 'create',
        //         checked: false
        //       }, {
        //         name: '详情',
        //         value: 'detail',
        //         checked: true
        //     }]
        // }
    ],
    actions:(data)=>{
        let actions=[]
        const { hasDialog, hasApi, hasVuex, vuexModuleName, ViewName, moduleDir, templateFuc } = data
        if (hasVuex&&vuexModuleName) {      
            actions.push(_ => {        
                const cmd = `npm run new vuex ${vuexModuleName}`        
                exec(cmd, (err, res, stderr) => {          
                    if (err || stderr) {           
                         return err || stderr          
                        }          
                    process.stdout.write(res)        
                }) 
                return '已添加 vuex modules 配置文件'      
            })    
        }
        return actions
    }
}