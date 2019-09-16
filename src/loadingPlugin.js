export default ({ namespace = '$loadingPlugin'})=> {
  return {
    data(){
      return {
        loadingPlugin__: {}
      }
    },
    created(){
      if(!this.$vnode)return;
      const extendOptions = this.$vnode.componentOptions.Ctor.extendOptions;
      if(extendOptions.methods){
        const methods = extendOptions.methods = createLoading(extendOptions.methods);
        for(let key in methods){
          if(methods.hasOwnProperty(key)){
            this[key] = methods[key];
          }
        }
      }
    },
    watch:{
      loadingPlugin__:{
        handler(val){
          this[namespace] = val;
          this.$forceUpdate()
        },
        immediate:true,
        deep:true
      }
    },
  }
}

export function createLoading(obj) {
  const newObj = {};
  for (const k in obj){
    if(obj.hasOwnProperty(k)){
      newObj[k] = function(...args){
        const rtn = obj[k].apply(this,args);
        //监听异步函数
        if(rtn instanceof Promise){
          return new Promise((resolve, reject) => {
            this.$set(this.loadingPlugin__,k,true);
            rtn.then(resolve)
            .catch(reject)
            .finally(() => {
              this.$set(this.loadingPlugin__,k,false);
            })  
          })
        }else{
          return rtn
        }
      }
    }
  }
  return newObj
}