/*
 * @Author: jing.chen
 * @Date: 2020-12-16 15:22:28
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-12-16 15:22:46
 * @Description:
 */
module.exports =
  process.env.NODE_ENV === "production"
    ? require("./config.lib")
    : require("./config.doc");
