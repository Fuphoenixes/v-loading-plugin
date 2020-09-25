## v-loading-plugin
---

[English](./README.md) | 简体中文

1. 适用于vue2.x,自动监听异步函数的进行状态，可用来根据其状态显示loading，效果显著
2. [项目源码](https://github.com/Fuphoenixes/v-loading-plugin)
3. 觉得好用给个star，谢啦！


## Install

```
npm install v-loading-plugin
```
or
```
yarn add v-loading-plugin
```


## Usage

main.js
```
import loadingPlugin from 'v-loading-plugin';

Vue.use(loadingPlugin)
//或
Vue.use(loadingPlugin,{
  namespace:'$loadingPlugin'
})

```
demo.vue
```
<template>
  <div v-if="$loadingPlugin.getList">loading ...</div> 
  <!-- 
    这里会根据getList函数的异步状态自动显示loading,
    例如配合类似elementui的v-loading显示loading，
    省去了手动根据异步函数的状态设置this.loading=true或者false 
  -->
</template>
<script>
const timeout = delay => new Promise(resolve => setTimeout(resove,delay))

export default {
  created(){
    this.getList();
  },
  methods:{
    async getList(){
      await timeout(3000)
    }
  },
}

</script>   
```
