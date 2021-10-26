<!--
 * @Author: jing.chen
 * @Date: 2020-12-16 14:39:20
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-26 14:55:54
 * @Description: 
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    {{ 123 }}
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import utils from "@/index";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  mounted() {
    console.log(123);
    console.log("utils.isArray([]) is array is:", utils.isArray([]));
    console.log("utils.isArray('') is array is:", utils.isArray(""));
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
