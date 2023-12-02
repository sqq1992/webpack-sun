import './css/public.css'
import './css/index.css'

import 'jquery'
import './js/public'
import './js/nav'

import { get } from 'lodash-es'
console.log('dsdsd', get({ a: 1 }, 'a'))

// treeshaking除非条件
// 1. 通过解构的方法获取方法，可以触发treeshaking
// 2. 调用的npm包必须使用ESM
// 3. 同一文件的treeshaking有触发条件，条件就是mode=production
// 4. 一定要注意使用解构来加载模块
