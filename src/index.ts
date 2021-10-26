/*
 * @Author: jing.chen
 * @Date: 2020-12-16 14:59:17
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-26 14:46:41
 * @Description: 入口
 */
import * as lodash from "./core/lodash-tool";
import * as verify from "./core/verify";
import * as is from "./core/is";
import { Types } from "./types";
import { mixin } from "./tools/index";

/**
 * @ignore
 */
function initUtils(): Types {
  const instance = Object.create(null);
  const arr = [is, lodash, verify];

  mixin(instance, arr);

  return instance as Types;
}

/**
 * @ignore
 */
const _utils = initUtils();

export default _utils;
