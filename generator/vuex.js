const {modules}=require('./config/module')
const path =require('path')
let cwd=process.cwd()
let rootDir=path.join('../')

module.exports={
    description:'添加vuex的子模块',
    prompts:[
        {
            type:'input',
            name:'moduleName',
            message:'请输入vuex的子模块名称，如MyApp',
            validate(value){
                if((/([A-Z][a-z]+)+/).test(value))return true
                return 'module必须为驼峰命名'
            }
        }
    ],
    actions:function(data){
        let actions=[
            {
                type:'add',
                path:`${rootDir}/src/store/{{moduleName}}/index.js`,
                templateFile:`template/store/module.hbs`,
                data:{
                }
            },
            {
                type:'append',
                path:`${rootDir}/src/store/index.js`,
                pattern:/\/\/importModule/,
                templateFile:`template/store/import.hbs`,
                data:{
                    moduleName:`{{moduleName}}`,
                    name:`index`
                }
            },
            {
                type:'append',
                path:`${rootDir}/src/store/index.js`,
                pattern:/\/\/addModule/,
                templateFile:`template/store/spread.hbs`,
                data:{
                    moduleName:`{{moduleName}}`,
                }
            },
        ]
        return actions
    }
}