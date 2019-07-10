export default {
  data(){
    return {
      loadingPlugin: {}
    }
  },
  beforeCreate(){
    if(!this.$vnode)return;
    const methods = this.$vnode.componentOptions.Ctor.extendOptions.methods;
    const asyncMethods = this.$vnode.componentOptions.Ctor.extendOptions.asyncMethods;
    if(asyncMethods){
      Object.assign(methods,createLoading(asyncMethods))
    }
  },
}

export function createLoading(obj) {
  const newObj = {};
  for (const k in obj){
    newObj[k] =  function(...args){
      return new Promise((resolve, reject) => {
        this.$set(this.loadingPlugin,k,true);
        obj[k].apply(this,args)
          .then(resolve)
          .catch(reject)
          .finally(() => {
            this.$set(this.loadingPlugin,k,false);
          })
      })
    }
  }
  return newObj
}
