/*
 * @Author: jing.chen
 * @Date: 2020-12-16 14:59:17
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-12-16 15:11:57
 * @Description: 入口
 */
import * as env from "./util-tool/env";
import * as is from "./util-tool/is";
import { Types } from "./types";
import { mixin } from "./tools/index";

/**
 * @ignore
 */
function initUtils(): Types {
  const instance = Object.create(null);
  const arr = [env, is];

  mixin(instance, arr);

  return instance as Types;
}

/**
 * @ignore
 */
const _utils = initUtils();

export default _utils;
