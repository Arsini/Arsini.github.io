## utils
```js
    /********************** 判断数据类型 **********************/

    const isObj = obj => Object.prototype.toString.call(obj) === "[object Object]",

    const isArr = obj => Object.prototype.toString.call(obj) === "[object Array]",

    const isNull = obj => Object.prototype.toString.call(obj) === "[object Null]",

    const isUndefined = obj => Object.prototype.toString.call(obj) === "[object Undefined]",
```