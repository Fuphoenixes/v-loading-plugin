import plugin, { createLoading } from './loadingPlugin.js'

const loadingPlugin = {
  install:function(Vue,options){
    Vue.mixin(plugin(options))
  },
};

export { createLoading } 

export default loadingPlugin