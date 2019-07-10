module.exports = function (n) {
	function e(o) {
		if (t[o]) return t[o].exports;
		var r = t[o] = {i: o, l: !1, exports: {}};
		return n[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
	}

	var t = {};
	return e.m = n, e.c = t, e.d = function (n, t, o) {
		e.o(n, t) || Object.defineProperty(n, t, {configurable: !1, enumerable: !0, get: o})
	}, e.n = function (n) {
		var t = n && n.__esModule ? function () {
			return n.default
		} : function () {
			return n
		};
		return e.d(t, "a", t), t
	}, e.o = function (n, e) {
		return Object.prototype.hasOwnProperty.call(n, e)
	}, e.p = "", e(e.s = 0)
}([function (n, e, t) {
	"use strict";
	Object.defineProperty(e, "__esModule", {value: !0}), e.createLoading = void 0;
	var o = t(1), r = function (n) {
		return n && n.__esModule ? n : {default: n}
	}(o), i = {
		install: function (n) {
			n.mixin(r.default)
		}
	};
	e.createLoading = o.createLoading, e.default = i
}, function (n, e, t) {
	"use strict";

	function o(n) {
		var e = {};
		for (var t in n) !function (t) {
			e[t] = function () {
				for (var e = this, o = arguments.length, r = Array(o), i = 0; i < o; i++) r[i] = arguments[i];
				return new Promise(function (o, i) {
					e.$set(e.loadingPlugin, t, !0), n[t].apply(e, r).then(o).catch(i).finally(function () {
						e.$set(e.loadingPlugin, t, !1)
					})
				})
			}
		}(t);
		return e
	}

	Object.defineProperty(e, "__esModule", {value: !0}), e.createLoading = o, e.default = {
		data: function () {
			return {loadingPlugin: {}}
		}, beforeCreate: function () {
			if (this.$vnode) {
				var n = this.$vnode.componentOptions.Ctor.extendOptions.methods,
					e = this.$vnode.componentOptions.Ctor.extendOptions.asyncMethods;
				e && Object.assign(n, o(e))
			}
		}
	}
}]);