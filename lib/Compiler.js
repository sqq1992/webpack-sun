
const path = require('path')
const fs = require('fs')

class Compiler {
    constructor(config){
        this.config = config
        const { entry } = config // 配置文件
        this.entry = entry // 入口文件
        this.root = process.cwd() // 输入 webpack-sun 的路径
        this.modules = {} // 初始化一个控对象，存放所有的模块
    }

    /**
     * 开始打包
     *  打包最主要的就是依赖的分析
     */
    start(){
        this.depAnalyse(path.resolve(this.root, this.entry))
    }

    /**
     * 依赖分析
     *  需要根据入口entry进行开始分析
     */
    depAnalyse(modulePath){
        // 获取 index.js 的内容
        let source = this.getSource(modulePath)
        console.log('source', source);
    }

    // 读取文件
    getSource(path){
        return fs.readFileSync(path, 'utf-8')
    }
}

module.exports = Compiler

