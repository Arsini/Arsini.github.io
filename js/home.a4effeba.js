(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0942":function(t,e,n){"use strict";var i=n("9a04"),a=n.n(i);a.a},"7abe":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("swipe",{staticClass:"home-swipe",attrs:{auto:1e5}},t._l(t.banner,function(t){return n("swipe-item",{key:t},[n("img",{attrs:{src:t}})])}),1),n("br"),n("div",{staticClass:"setOnePx box"}),n("p",[t._v("降低呃呃呃 dsf 123")]),n("div",{staticClass:"setBorderAll box"})],1)},a=[],s=n("ada1"),r=(n("8eac"),{components:{Swipe:s["Swipe"],SwipeItem:s["SwipeItem"]},data:function(){return{banner:[]}},created:function(){var t=this;this.$api.getBanner().then(function(e){t.banner=e.list})},methods:{}}),o=r,l=(n("0942"),n("2877")),u=Object(l["a"])(o,i,a,!1,null,"2780d836",null);e["default"]=u.exports},"8eac":function(t,e,n){},"9a04":function(t,e,n){},ada1:function(t,e){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mt-swipe-item",mounted:function(){this.$parent&&this.$parent.swipeItemCreated(this)},destroyed:function(){this.$parent&&this.$parent.swipeItemDestroyed(this)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),a=n(6);e.default={name:"mt-swipe",created:function(){this.dragState={}},data:function(){return{ready:!1,dragging:!1,userScrolling:!1,animating:!1,index:0,pages:[],timer:null,reInitTimer:null,noDrag:!1}},props:{speed:{type:Number,default:300},defaultIndex:{type:Number,default:0},disabled:{type:Boolean,default:!1},auto:{type:Number,default:3e3},continuous:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},noDragWhenSingle:{type:Boolean,default:!0},prevent:{type:Boolean,default:!1},propagation:{type:Boolean,default:!1}},methods:{swipeItemCreated:function(){var t=this;this.ready&&(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},swipeItemDestroyed:function(){var t=this;this.ready&&(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},translate:function(t,e,n,a){var s=this,r=arguments;if(n){this.animating=!0,t.style.webkitTransition="-webkit-transform "+n+"ms ease-in-out",setTimeout(function(){t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},50);var o=!1,l=function(){o||(o=!0,s.animating=!1,t.style.webkitTransition="",t.style.webkitTransform="",a&&a.apply(s,r))};(0,i.once)(t,"webkitTransitionEnd",l),setTimeout(l,n+100)}else t.style.webkitTransition="",t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},reInitPages:function(){var t=this,e=this.$children;this.noDrag=1===e.length&&this.noDragWhenSingle;var n=[];this.index=this.defaultIndex,e.forEach(function(e,i){n.push(e.$el),(0,a.removeClass)(e.$el,"is-active"),i===t.defaultIndex&&(0,a.addClass)(e.$el,"is-active")}),this.pages=n},doAnimate:function(t,e){var n=this;if(0!==this.$children.length&&(e||!(this.$children.length<2))){var i,s,r,o,l,u,d=this.speed||300,c=this.index,h=this.pages,f=h.length;e&&"goto"!==t?(i=e.prevPage,r=e.currentPage,s=e.nextPage,o=e.pageWidth,l=e.offsetLeft):(e=e||{},o=this.$el.clientWidth,r=h[c],"goto"===t?(i=e.prevPage,s=e.nextPage):(i=h[c-1],s=h[c+1]),this.continuous&&h.length>1&&(i||(i=h[h.length-1]),s||(s=h[0])),i&&(i.style.display="block",this.translate(i,-o)),s&&(s.style.display="block",this.translate(s,o)));var p=this.$children[c].$el;"prev"===t?(c>0&&(u=c-1),this.continuous&&0===c&&(u=f-1)):"next"===t?(c<f-1&&(u=c+1),this.continuous&&c===f-1&&(u=0)):"goto"===t&&e.newIndex>-1&&e.newIndex<f&&(u=e.newIndex);var g=function(){if(void 0!==u){var t=n.$children[u].$el;(0,a.removeClass)(p,"is-active"),(0,a.addClass)(t,"is-active"),n.index=u,n.$emit("change",u,c)}i&&(i.style.display=""),s&&(s.style.display="")};setTimeout(function(){"next"===t?(n.translate(r,-o,d,g),s&&n.translate(s,0,d)):"prev"===t?(n.translate(r,o,d,g),i&&n.translate(i,0,d)):"goto"===t?i?(n.translate(r,o,d,g),n.translate(i,0,d)):s&&(n.translate(r,-o,d,g),n.translate(s,0,d)):(n.translate(r,0,d,g),void 0!==l?(i&&l>0&&n.translate(i,-1*o,d),s&&l<0&&n.translate(s,o,d)):(i&&n.translate(i,-1*o,d),s&&n.translate(s,o,d)))},10)}},next:function(){this.doAnimate("next")},prev:function(){this.doAnimate("prev")},goto:function(t){this.index!==t&&(t<this.index?this.doAnimate("goto",{newIndex:t,prevPage:this.pages[t]}):this.doAnimate("goto",{newIndex:t,nextPage:this.pages[t]}))},doOnTouchStart:function(t){if(!this.noDrag&&!this.disabled){var e=this.$el,n=this.dragState,i=t.changedTouches?t.changedTouches[0]:t;n.startTime=new Date,n.startLeft=i.pageX,n.startTop=i.pageY,n.startTopAbsolute=i.clientY,n.pageWidth=e.offsetWidth,n.pageHeight=e.offsetHeight;var a=this.$children[this.index-1],s=this.$children[this.index],r=this.$children[this.index+1];this.continuous&&this.pages.length>1&&(a||(a=this.$children[this.$children.length-1]),r||(r=this.$children[0])),n.prevPage=a?a.$el:null,n.dragPage=s?s.$el:null,n.nextPage=r?r.$el:null,n.prevPage&&(n.prevPage.style.display="block"),n.nextPage&&(n.nextPage.style.display="block")}},doOnTouchMove:function(t){if(!this.noDrag&&!this.disabled){var e=this.dragState,n=t.changedTouches?t.changedTouches[0]:t;e.currentLeft=n.pageX,e.currentTop=n.pageY,e.currentTopAbsolute=n.clientY;var i=e.currentLeft-e.startLeft,a=e.currentTopAbsolute-e.startTopAbsolute,s=Math.abs(i),r=Math.abs(a);if(s<5||s>=5&&r>=1.73*s)this.userScrolling=!0;else{this.userScrolling=!1,t.preventDefault();var o=(i=Math.min(Math.max(1-e.pageWidth,i),e.pageWidth-1))<0?"next":"prev";if(e.prevPage&&"prev"===o)this.translate(e.prevPage,i-e.pageWidth);else if(e.nextPage&&"next"===o)this.translate(e.nextPage,i+e.pageWidth);else{var l=e.pageWidth,u=i;i=-1/6/l*u*(Math.abs(u)-2*l)}this.translate(e.dragPage,i)}}},doOnTouchEnd:function(){if(!this.noDrag&&!this.disabled){var t=this.dragState,e=new Date-t.startTime,n=null,i=t.currentLeft-t.startLeft,a=t.currentTop-t.startTop,s=t.pageWidth,r=this.index,o=this.pages.length;if(e<300){var l=Math.abs(i)<5&&Math.abs(a)<5;(isNaN(i)||isNaN(a))&&(l=!0),l&&this.$children[this.index].$emit("tap")}e<300&&void 0===t.currentLeft||((e<300||Math.abs(i)>s/2)&&(n=i<0?"next":"prev"),this.continuous||(0===r&&"prev"===n||r===o-1&&"next"===n)&&(n=null),this.$children.length<2&&(n=null),this.doAnimate(n,{offsetLeft:i,pageWidth:t.pageWidth,prevPage:t.prevPage,currentPage:t.dragPage,nextPage:t.nextPage}),this.dragState={})}},dragStartEvent:function(t){this.prevent&&t.preventDefault(),this.propagation&&t.stopPropagation(),this.animating||(this.dragging=!0,this.userScrolling=!1,this.doOnTouchStart(t))},dragMoveEvent:function(t){this.dragging&&this.doOnTouchMove(t)},dragEndEvent:function(t){if(this.userScrolling)return this.dragging=!1,void(this.dragState={});this.dragging&&(this.doOnTouchEnd(t),this.dragging=!1)}},destroyed:function(){this.timer&&(clearInterval(this.timer),this.timer=null),this.reInitTimer&&(clearTimeout(this.reInitTimer),this.reInitTimer=null)},mounted:function(){var t=this;this.ready=!0,this.auto>0&&(this.timer=setInterval(function(){t.dragging||t.animating||t.next()},this.auto)),this.reInitPages();var e=this.$el;e.addEventListener("touchstart",this.dragStartEvent),e.addEventListener("touchmove",this.dragMoveEvent),e.addEventListener("touchend",this.dragEndEvent),e.addEventListener("mousedown",this.dragStartEvent),e.addEventListener("mousemove",this.dragMoveEvent),e.addEventListener("mouseup",this.dragEndEvent)}}},function(t,e,n){"use strict";function i(t,e,n,i,a,s,r,o){var l=typeof(t=t||{}).default;"object"!==l&&"function"!==l||(t=t.default);var u,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),s&&(d._scopeId=s),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=u):a&&(u=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(d.functional){d._injectStyles=u;var c=d.render;d.render=function(t,e){return u.call(e),c(t,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,u):[u]}return{exports:t,options:d}}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mint-swipe-item"},[this._t("default")],2)},a=[]},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mint-swipe"},[n("div",{ref:"wrap",staticClass:"mint-swipe-items-wrap"},[t._t("default")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showIndicators,expression:"showIndicators"}],staticClass:"mint-swipe-indicators"},t._l(t.pages,function(e,i){return n("div",{key:i,staticClass:"mint-swipe-indicator",class:{"is-active":i===t.index}})}))])},a=[]},function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n(3),o=n(2),l=Object(o.a)(a.a,r.a,r.b,!1,null,null,null);e.default=l.exports},function(t,e,n){"use strict";var i=function(t,e){if(!t||!e)return!1;if(-1!=e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1};t.exports={hasClass:i,addClass:function(t,e){if(t){for(var n=t.className,a=(e||"").split(" "),s=0,r=a.length;s<r;s++){var o=a[s];o&&(t.classList?t.classList.add(o):i(t,o)||(n+=" "+o))}t.classList||(t.className=n)}},removeClass:function(t,e){if(t&&e){for(var n=e.split(" "),a=" "+t.className+" ",s=0,r=n.length;s<r;s++){var o=n[s];o&&(t.classList?t.classList.remove(o):i(t,o)&&(a=a.replace(" "+o+" "," ")))}t.classList||(t.className=(a||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))}}}},function(t,e,n){"use strict";var i=document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},a=document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};t.exports={on:i,off:a,once:function(t,e,n){i(t,e,function i(){n&&n.apply(this,arguments),a(t,e,i)})}}},function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n(4),o=n(2),l=function(t){n(14)},u=Object(o.a)(a.a,r.a,r.b,!1,l,null,null);e.default=u.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SwipeItem=e.Swipe=void 0;var i=s(n(8)),a=s(n(5));function s(t){return t&&t.__esModule?t:{default:t}}e.Swipe=i.default,e.SwipeItem=a.default},,,,,function(t,e){}])}}]);