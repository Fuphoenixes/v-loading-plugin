export default {
  data(){
    return {
      loadingPlugin: {}
    }
  },
	beforeCreate(){
		if(!this.$vnode)return;
		const extendOptions = this.$vnode.componentOptions.Ctor.extendOptions;
		const asyncMethods = extendOptions.asyncMethods;
		if(asyncMethods){
			if(extendOptions.methods){
				Object.assign(extendOptions.methods,createLoading(asyncMethods))
			}
      const methods = createLoading(asyncMethods);
      for(let key in methods){
        if(methods.hasOwnProperty(key)){
          this[key] = methods[key];
        }
      }
		}
  },
  created(){
    this.$loadingPlugin = this.loadingPlugin;
  }
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
