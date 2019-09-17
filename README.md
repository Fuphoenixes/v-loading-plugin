## v-loading-plugin
---

English | [简体中文](https://github.com/Fuphoenixes/v-loading-plugin/blob/master/README.zh-CN.md)

1. It is suitable for vue2.x. It can automatically monitor the state of asynchronous function and display loading according to its state. The effect is remarkable.
2. [source code](https://github.com/Fuphoenixes/v-loading-plugin)
3. If you think it's good, please give a star.


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
//or
Vue.use(loadingPlugin,{
  namespace:'$loadingPlugin'
})

```
demo.vue
```
<template>
  <div v-if="$loadingPlugin.getList">loading ...</div> 
  <!-- Here loading is automatically displayed according to the asynchronous state of the getList function. -->
</template>
<script>
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

function timeout (delay){
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          resolve();
      },delay)
  })
}
</script>   
```
