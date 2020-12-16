/*
 * @Author: jing.chen
 * @Date: 2020-12-16 15:09:33
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-12-16 15:09:33
 * @Description:
 */
/**
 * @ignore
 */
export function mixin<T, U>(to: T, from: Array<U>): T {
  from.forEach(obj => {
    Object.getOwnPropertyNames(obj).forEach(key => {
      to[key] = obj[key];
    });
  });
  return to;
}
