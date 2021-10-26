/*
 * @Author: jing.chen
 * @Date: 2021-09-01 11:31:03
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-26 14:48:50
 * @Description:
 */
// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });
import utils from "../../src/index";
// 判断Utils是否挂载对应的方法
describe("Utils test", () => {
  // is模块
  describe("Is test", () => {
    test("Utils must have a isArray function", () => {
      expect(typeof utils.isArray).toBe("function");
    });

    test("Utils must have a isObject function", () => {
      expect(typeof utils.isObject).toBe("function");
    });

    test("Utils must have a isPlainObject function", () => {
      expect(typeof utils.isPlainObject).toBe("function");
    });

    test("Utils must have a isNum function", () => {
      expect(typeof utils.isNum).toBe("function");
    });

    test("Utils must have a isFunc function", () => {
      expect(typeof utils.isFunc).toBe("function");
    });

    test("Utils must have a isUndefined function", () => {
      expect(typeof utils.isUndefined).toBe("function");
    });

    test("Utils must have a isNull function", () => {
      expect(typeof utils.isNull).toBe("function");
    });
  });

  // verify模块
  describe("Verify test", () => {
    test("Utils must have a verifyHttp function", () => {
      expect(typeof utils.verifyHttp).toBe("function");
    });

    test("Utils must have a verifyMobile function", () => {
      expect(typeof utils.verifyMobile).toBe("function");
    });

    test("Utils must have a verifyCode function", () => {
      expect(typeof utils.verifyCode).toBe("function");
    });

    test("Utils must have a verifyEmail function", () => {
      expect(typeof utils.verifyEmail).toBe("function");
    });
  });
});
