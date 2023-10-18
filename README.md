# webpack-sun 探索webpack内部机制
# Webpack5 核心原理与应用实践 掘金课程

## 1.如何借助 Babel+TS+ESLint 构建现代 JS 工程环境？normal.config.js
(1).使用 resolve.extensions 声明自动解析 .ts 后缀文件，这意味着代码如 import "./a.ts" 可以忽略后缀声明，简化为 import "./a" 文件
(2).借助预处理器、PostCSS 等构建现代 CSS 工程环境
(3).使用 Webpack 构建 NPM Library 的正确方式(npm.config.js)

## 2.深入理解 Webpack 核心配置结构 base.config.js
import：声明入口文件，支持路径字符串或路径数组(多入口)；
dependOn：声明该入口的前置依赖 Bundle；
runtime：设置该入口的 Runtime Chunk，若该属性不为空，Webpack 会将该入口的运行时代码抽离成单独的 Bundle；
filename：效果与 output.filename 类同，用于声明该模块构建产物路径；
library：声明该入口的 output.library 配置，一般在构建 NPM Library 时使用；
publicPath：效果与 output.publicPath 相同，用于声明该入口文件的发布 URL；
chunkLoading：效果与 output.chunkLoading 相同，用于声明异步模块加载的技术方案，支持 false/jsonp/require/import 等值；
asyncChunks：效果与 output.asyncChunks 相同，用于声明是否支持异步模块加载，默认值为 true。

    



