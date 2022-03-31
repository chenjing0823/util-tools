# util-tools

## 安装
```
npm install common-util-tools -D
```
## 使用
```
const utils = require('common-util-tools')
const isarray1 = utils.isArray([])
console.log(isarray1) // true
const isarray2 = utils.isArray('')
console.log(isarray2) // false
```