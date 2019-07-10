# loading-plugin
---
1. 本插件用于vue2.x,自定义了一个钩子(asyncMethods)(会自动合并进methods钩子)，用来放置异步函数可以获取各种接口请求，异步函数的loading状态，配合其他更具状态显示loading的组件（例如elementui的v-loading指令）效果显著
2. [项目源码(source code)](https://github.com/Fuphoenixes/vue-loading-plugin)


## Install

```
npm install loading-plugin
```
or
```
yarn add loading-plugin
```


## Usage

main.js
```
import loadingPlugin from 'loading-plugin';

Vue.use(loadingPlugin)

```
demo.vue
```
<template>
  <div>{{loadingPlugin.getList}}</div> 
  <div>
      这里会显示getList函数的异步状态,进行中显示true,进行结束则显示false，
      可配合类似elementui的v-loading或者其他通过true/false显示loading状态的组件使用，
      可以省去手动根据异步函数的状态设置this.loading=true或者false
  </div>   
</template>
<script>
export default {
  data(){
    return{}
  },
  created(){
    this.getList();
  },
  methods:{},
  asyncMethods(){
    async getList(){
      await timeout(3000)
    }
  }
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