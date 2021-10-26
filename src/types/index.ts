/*
 * @Author: jing.chen
 * @Date: 2020-12-16 15:06:38
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-26 14:46:19
 * @Description:
 */
interface Is {
  /**
   *
   * 判断是否是数组
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author superjing
   * ``` typescript
   * utils.isArray([1, 2])    // true
   * ```
   *
   */
  isArray(value: any): boolean;

  /**
   *
   * 判断是否是对象 ([], object) 都为true
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author superjing
   * ``` typescript
   * utils.isObject([1, 2])    // true
   * ```
   *
   */
  isObject(value: any): boolean;

  /**
   *
   * 判断是否是绝对的对象
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author superjing
   * ``` typescript
   * utils.isArray({})    // true
   * ```
   *
   */
  isPlainObject(value: any): boolean;

  /**
   *
   * 判断是否是数字
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author superjing
   * ``` typescript
   * utils.isNum(1)    // true
   * ```
   *
   */
  isNum(value: any): boolean;

  /**
   *
   * 判断是否是函数
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author superjing
   * ``` typescript
   * utils.isFunc(function () {})    // true
   * ```
   *
   */
  isFunc(value: any): boolean;

  /**
   *
   * 判断是否是undefined
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author superjing
   * ``` typescript
   * utils.isUndefined(判断是否是undefined)    // true
   * ```
   *
   */
  isUndefined(value: any): boolean;

  /**
   *
   * 判断是否是null
   * @param value 传入需要判断的变量
   * @return {boolean} true | false
   * @author superjing
   * ``` typescript
   * utils.isNull(null)    // true
   * ```
   *
   */
  isNull(value: any): boolean;
}
interface LodashTool {
  /**
   * @description get方法，用于解决a.b.c.d出现undefined导致代码保存不继续向下执行
   * @param {Object} [object] 目标对象
   * @param {String} [path] 需要取值路径
   * @param {*} [defaultVal] 值不存在时候的默认值
   * @return {any} 获取到的值
   * ``` typescript
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   * utils._get(object, 'a[0].b.c'); // => 3 （推荐使用）
   * utils._get(object, ['a', '0', 'b', 'c']); // => 3
   * utils._get(object, 'a.b.c', 'default'); // => 'default' （推荐使用）
   */
  _get(object: object, path: string, defaultVal?: any): any;

  /**
   * @description 该方法类似find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
   * @param {Array} [array] 目标对象
   * @returns {Number} -1为没找到对应的值，其余为数组对应的index
   * @example
   * * array = [
   * *   { 'user': 'barney', 'active': false },
   * *   { 'user': 'fred', 'active': false },
   * *   { 'user': 'pebbles', 'active': true }
   * * ]
   * * utils._findIndex(array, function(o) { return o.user == 'barney'; }) => 0
   * * utils._findIndex(array, { 'user': 'fred', 'active': false }) => 1 （推荐使用）
   * * utils._findIndex(array, ['active', false]) => 0 （推荐使用）
   * * utils._findIndex(array, 'active') => 2 （推荐使用）
   */
  _findIndex(array: Array<any>, predicate: any, fromIndex?: number): number;

  /**
   * @description 该方法类似find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
   * @param {Array} [array] 目标对象
   * @returns {Number} -1为没找到对应的值，其余为数组对应的index
   * @example
   * * array = [
   * *   { 'user': 'barney', 'active': false },
   * *   { 'user': 'fred', 'active': false },
   * *   { 'user': 'pebbles', 'active': true }
   * * ]
   * * utils._findLastIndex(array, function(o) { return o.user == 'pebbles'; }) => 2
   * * utils._findLastIndex(array, { 'user': 'barney', 'active': true }) => 0 （推荐使用）
   * * utils._findLastIndex(array, ['active', false]) => 2 （推荐使用）
   * * utils._findLastIndex(array, 'active') => 0 （推荐使用）
   */
  _findLastIndex(
    array: Array<any>,
    predicate: Array<any> | Function | object | string,
    fromIndex?: number
  ): number;

  /**
   * @description 数组去重（纯数组）
   * @example
   * * var a =[1, 2, 1, 5, 1, 9]
   * * utils._uniq(a) => [1, 2, 5, 9]
   */
  _uniq(array: Array<any>): Array<any>;

  /**
   * @description 创建一个从 object 中选中的 key 的对象。
   * @example
   * * var object = { 'a': 1, 'b': '2', 'c': 3 }
   * * utils._pick(object, ['a', 'c']) => { 'a': 1, 'c': 3 }
   */
  _pick(object: object, props: string | string[]): object;

  /**
   * @description 反向版 pick
   * @example
   * * var object = { 'a': 1, 'b': '2', 'c': 3 }
   * * utils._pick(object, ['a', 'c']) => { 'b': '2' }
   */
  _omit(object: object, props: string | string[]): object;

  /**
   * @description 判断是否为undefined
   * @returns 返回布尔值
   * @example
   * * var a
   * * utils._isUndefined(a) => true
   */
  _isUndefined(value: any): boolean;

  /**
   * @description 判断是否为NaN
   * @returns 返回布尔值
   * @example
   * * var a = +'str'
   * * utils._isNaN(a) => true
   */
  _isNaN(value: any): boolean;

  /**
   * @description 去除字符串首尾空格方法
   * @returns 返回去除后的字符串
   * @example
   * * var a = ' 123 '
   * * utils._Trim(a) = '123'
   */
  _trim(str: string, chars?: string): string;

  /**
   * @description 检测是否是空对象
   * @returns { boolean }
   * @example
   * utils._isEmpty(null) true
   * utils._isEmpty([1, 2, 3]) true
   * utils._isEmpty({ 'a': 1 }) false
   *
   */
  _isEmpty(val: any): boolean;

  /**
   * @description 对比两值是否相等
   * @returns { boolean }
   * @example
   * const a = {a:1}
   * const b = {a:1}
   * utils._isEqual(a, b) // true
   * a === b // false
   *
   */
  _isEqual(value: any, other: any): boolean;

  /**
   * @description 防抖
   * @param { Function } [func] 需要执行的函数
   * @param { Number } [delay] 需要延迟的毫秒数
   * @param { Object } [options] 可选参数
   * @param { Boolean } [options.leading] 指定调用在节流开始前
   * @param { Number } [options.maxWait] 设置func允许被延迟的最大值
   * @param { Boolean } [options.trailing] 指定调用在节流结束后
   * @returns { Function }
   * @example
   * utils._debounce(calculateLayout, 150)
   */
  _debounce(func: Function, delay?: number, options?: object): Function;

  /**
   * @description 节流
   * @param { Function } [func] 需要执行的函数
   * @param { Number } [delay] 需要节流的毫秒数
   * @param { Object } [options] 可选参数
   * @param { Boolean } [options.leading] 指定调用在节流开始前
   * @param { Boolean } [options.trailing] 指定调用在节流结束后
   * @returns { Function }
   * @example
   * utils._throttle(() => {}, 100)
   *
   */
  _throttle(func: Function, delay?: number, options?: object): Function;
}
interface Verify {
  /**
   *
   * 判断是否是合法链接
   * @param value 传入需要验证的url
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * if (utils.verifyHttp(url)) {
   *    // do sth.
   * }
   * ```
   *
   */
  verifyHttp(value: string): boolean;

  /**
   *
   * 判断是否是合法手机号
   * @param mobile 传入需要验证的手机号
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * if (utils.verifyMobile(mobile)) {
   *    // do sth.
   * }
   * ```
   *
   */
  verifyMobile(mobile: string): boolean;

  /**
   *
   * 判断是否是6位纯数字验证码
   * @param code 传入需要验证的验证码
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * if (utils.verifyCode(code)) {
   *    // do sth.
   * }
   * ```
   *
   */
  verifyCode(code: string): boolean;

  /**
   *
   * 判断是否是合法邮箱格式
   * @param email 传入需要验证的邮箱
   * @return {boolean} true | false
   * @author Jarvan
   * ``` typescript
   * if (utils.verifyEmail(email)) {
   *    // do sth.
   * }
   * ```
   *
   */
  verifyEmail(email: string): boolean;
}

export interface Types extends Is, LodashTool, Verify {}
