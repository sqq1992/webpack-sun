
const child = require('./child')

module.exports = {
    msg: '我是parent的信息',
    child: child.msg
}