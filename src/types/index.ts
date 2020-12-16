/*
 * @Author: jing.chen
 * @Date: 2020-12-16 15:06:38
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-12-16 15:33:02
 * @Description:
 */
interface Env {
  /**
   *
   * 返回当前浏览器所在系统
   * @return {string} ios | android | winPhone | unknown
   * @author superjing
   * ``` typescript
   * const systemOs = utils.getOs()
   * ```
   *
   */
  getOs(): string;

  /**
   *
   * 判断当前浏览器是移动端还是pc端
   * @return {boolean} pc: true; mobile: false
   * @author superjing
   * ``` typescript
   * const env = utils.getEnv()
   * ```
   */
  getEnv(): boolean;

  /**
   *
   * 判断IE版本
   * @return {number | string} -1: 非IE; 6 - 11: IE6-IE11版本; edge: Edge浏览器;
   * @author superjing
   * ``` typescript
   * const ieVersion = utils.getIEVersion()
   * ```
   */
  getIEVersion(): string | number;
}

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
/**
 *
 * @ignore
 *
 */
export interface Types extends Env, Is {}
