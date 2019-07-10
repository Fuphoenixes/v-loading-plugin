import loading, { createLoading } from './loadingPlugin.js'

const loadingPlugin = {
  install:function(Vue){
    Vue.mixin(loading)
  },
};

export { createLoading } 

export default loadingPlugin