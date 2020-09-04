const fs = require('fs')
const path =require('path')
const blackFileList = ['login', 'base','salary']// 不会被读取的文件模块
let  moduleList=[]
let cwd=process.cwd()
const foundFiles=async(data)=>{
    if(!blackFileList.includes(data.moduleName)){
        throw new Error('添加的新模块路由不存在请添加白名单里')
    }
    
    let fileExists=fs.existsSync(`${cwd}/src/router/${data.moduleName}`)
    if(!fileExists){
        fs.mkdirSync(`${cwd}/src/router/${data.moduleName}`)
    }
} 


module.exports={
    descriptions:'根据module添加路由文件',
    prompts:[
        {
            type:'list',
            name:'moduleName',
            message:'添加入哪个模块',
            choices:blackFileList
        },
        {
            type:'input',
            name:'path',
            message:'路由地址'
        },
        {
            type:'input',
            name:'name',
            message:'单文件名称'
        },
        {
            type:'input',
            name:'title',
            message:'左侧目录名称'
        },
    ],
    actions:function(data){
        foundFiles(data);
        const {moduleName, name, path ,title} = data
        let actions=[
            {
                type:'add',
                path:`src/router/{{moduleName}}/{{name}}.js`,
                templateFile:`template/router/router.hbs`,
                data:{
                    moduleName:`{{moduleName}}`,
                    name:`{{name}}`,
                    path:`{{path}}`,
                    title:`{{title}}`,
                }
            },
            {
                type:'append',
                path:`src/router/index.js`,
                pattern:/\[\/\/forImport/,
                templateFile:`template/router/import.hbs`,
                data:{
                    moduleName:`{{moduleName}}`,
                    name:`{{name}}`
                }
            },
            {
                type:'append',
                path:`src/router/index.js`,
                pattern:/\[\/\/forSpread/,
                templateFile:`template/router/spread.hbs`,
                data:{
                    name:`{{name}}`
                }
            },
        ]
        return actions
    }
}