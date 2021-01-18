const fs = require('fs');
const path = require('path')
const parser = require('@babel/parser')     //专门解析成ast格式
const traverse = require('@babel/traverse').default //分析依赖
const babel = require('@babel/core')    //将es6转化成es5
const getFileInfo = (file) => {
    const body = fs.readFileSync(file, 'utf-8');

    //将代码转化成ast格式
    const ast = parser.parse(body,{
        sourceType:'module' //表示我们要解析的是ES模块
    });

    // 分析依赖
    const deps = {}
    traverse(ast,{
        ImportDeclaration({node}){
            const dirname = path.dirname(file)
            const abspath = './' + path.join(dirname,node.source.value)
            deps[node.source.value] = abspath
        }
    })


    //将es6的代码转化成es5
    const {code} = babel.transformFromAst(ast,null,{
        presets:["@babel/preset-env"]
    })


    // console.log('ast', ast.program.body);

    const moduleInfo = {file,deps,code}
    return moduleInfo
};


//递归遍历模块信息
const parseModules = (file) =>{
    const entry =  getFileInfo(file)
    const temp = [entry]
    const depsGraph = {} //新增代码
    for (let i = 0;i<temp.length;i++){
        const deps = temp[i].deps
        if (deps){
            for (const key in deps){
                if (deps.hasOwnProperty(key)){
                    temp.push(getFileInfo(deps[key]))
                }
            }
        }
    }


    //将文件的依赖存储在键值对上
    temp.forEach(moduleInfo=>{
        depsGraph[moduleInfo.file] = {
            deps:moduleInfo.deps,
            code:moduleInfo.code
        }
    })
    console.log(depsGraph)


    return depsGraph
}

const bundle = (file) =>{
    const depsGraph = JSON.stringify(parseModules(file))
    console.log('bundle', depsGraph);
    return `(function (graph) {
        function require(file) {
            function absRequire(relPath) {
                return require(graph[file].deps[relPath])
            }
            var exports = {}
            (function (require,exports,code) {
                eval(code)
            })(absRequire,exports,graph[file].code)
            return exports
        }
        require('${file}')
    })(${depsGraph})`
}

//todo 测试代码

// test1
// var a = getFileInfo('./src/index.js');
// console.log('file', a.file);
// console.log('deps', a.deps);
// console.log('code', a.code);

//test2
// parseModules('./src/index.js');

//test3  写入到dist下的bundle.js里面
const content = bundle('./src/index.js');
console.log('content', content);

fs.mkdirSync('./dist');
fs.writeFileSync('./dist/bundle.js',content)