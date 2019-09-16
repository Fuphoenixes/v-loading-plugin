# loading-plugin
---
1. 适用于vue2.x,自动监听异步函数的进行状态，可用来根据其状态显示loading，效果显著
2. [项目源码(source code)](https://github.com/Fuphoenixes/v-loading-plugin)
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
Vue,use(loadingPlugin,{
  namespace:'$loadingPlugin'
})

```
demo.vue
```
<template>
  <div v-if="$loadingPlugin.getList">loading ...</div> 
  <div>
      这里会根据getList函数的异步状态显示loading,
      例如配合类似elementui的v-loading或者其他通过true/false显示loading状态的组件使用，
      可以省去手动根据异步函数的状态设置this.loading=true或者false
  </div>   
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