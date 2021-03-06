/*
 * @Author: jing.chen
 * @Date: 2020-12-16 15:11:27
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-12-16 15:11:27
 * @Description:
 */
/**
 *
 * @ignore
 * @return {string} 返回当前浏览器所在系统
 * ios | android | winPhone
 *
 */
export function getOs(): string {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf("Android") > -1 || userAgent.indexOf("Adr") > -1) {
    return "android";
  } else if (userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    return "ios";
  } else if (userAgent.indexOf("Windows Phone") > -1) {
    return "winPhone";
  } else {
    return "unknown";
  }
}

/**
 *
 * @ignore
 * @return {boolean} 判断当前浏览器是移动端(false)还是pc端(true)
 *
 */
export function getEnv(): boolean {
  const userAgent = navigator.userAgent;
  const device: string[] = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  ];
  let flag = true;
  for (let i = 0; i < device.length; i++) {
    if (userAgent.indexOf(device[i]) !== -1) {
      flag = false;
      break;
    }
  }
  return flag;
}

/**
 *
 * @ignore
 * @return {number | string} 判断IE版本
 * -1: 非IE
 * 6 - 11: IE6-IE11版本
 * edge: Edge浏览器
 *
 */
export function getIEVersion(): number | string {
  const userAgent = navigator.userAgent;
  const isIE =
    userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; // 判断是否IE<11浏览器
  const isEdge = userAgent.indexOf("Edge") > -1 && !isIE; // 判断是否IE的Edge浏览器
  const isIE11 =
    userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1; // IE11
  if (isIE11) {
    return 11;
  }
  if (isEdge) {
    return "edge"; // edge
  }
  if (isIE) {
    const reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    const fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion === 7) {
      return 7;
    } else if (fIEVersion === 8) {
      return 8;
    } else if (fIEVersion === 9) {
      return 9;
    } else if (fIEVersion === 10) {
      return 10;
    } else {
      return 6; // IE版本<=7
    }
  } else {
    return -1; // 不是ie浏览器
  }
}
