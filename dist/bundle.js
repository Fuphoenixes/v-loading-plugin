module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createLoading=void 0;var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r);var i={install:function(e){e.mixin(o.default)}};t.createLoading=r.createLoading,t.default=i},function(e,t,n){"use strict";function r(e){var t={},n=function(n){t[n]=function(){for(var t=this,r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return new Promise(function(r,i){t.$set(t.loadingPlugin,n,!0),e[n].apply(t,o).then(r).catch(i).finally(function(){t.$set(t.loadingPlugin,n,!1)})})}};for(var r in e)n(r);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.createLoading=r,t.default={data:function(){return{loadingPlugin:{}}},beforeCreate:function(){if(this.$vnode){var e=this.$vnode.componentOptions.Ctor.extendOptions,t=e.asyncMethods;if(t){e.methods&&Object.assign(e.methods,r(t));var n=r(t);for(var o in n)n.hasOwnProperty(o)&&(this[o]=n[o])}}},created:function(){this.$loadingPlugin=this.loadingPlugin}}}]);