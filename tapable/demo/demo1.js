const { SyncHook } = require('tapable')

// 1. 创建钩子实例
const sleep = new SyncHook()

// 2. 调用订阅接口注册回调
sleep.tap('test', () => {
  console.log('callback A')
})

// 3. 调用发布接口触发回调
sleep.call()

// 运行结果：
// callback A
