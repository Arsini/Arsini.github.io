(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"003c":function(t,i,e){},4598:function(t,i,e){"use strict";(function(t){e.d(i,"a",(function(){return h}));var n=e("a142"),s=Date.now();function o(t){var i=Date.now(),e=Math.max(0,16-(i-s)),n=setTimeout(t,e);return s=i+e,n}var a=n["d"]?t:window,c=a.requestAnimationFrame||o;a.cancelAnimationFrame||a.clearTimeout;function r(t){return c.call(a,t)}function h(t){r((function(){r(t)}))}}).call(this,e("c8ba"))},"63be":function(t,i,e){t.exports=e.p+"img/ex_1.a9fd1e3f.png"},"786d":function(t,i,e){},"7abe":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("Swipe",{staticClass:"banner",attrs:{autoplay:3e3,"indicator-color":"white"}},[n("SwipeItem",[n("img",{attrs:{src:e("63be")}})]),n("SwipeItem",[n("img",{attrs:{src:e("eca3")}})])],1),n("ul",{staticClass:"nav"},[t._m(0),t._l(t.list,(function(i){return n("router-link",{key:i.link,attrs:{to:i.link,tag:"li",flex:"main:justify"}},[n("span",[t._v(t._s(i.name))]),n("i",{staticClass:"iconfont iconChevronRight"})])}))],2)],1)},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",[e("a",{attrs:{href:"/game/index.html",flex:"main:justify"}},[e("span",[t._v("game")]),e("i",{staticClass:"iconfont iconChevronRight"})])])}],o=(e("68ef"),e("786d"),e("c31d")),a=e("d282"),c=Object(a["a"])("swipe-item"),r=c[0],h=c[1],u=r({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(){var t=arguments[0],i=this.$parent,e=i.vertical,n=i.computedWidth,s=i.computedHeight,a={width:n+"px",height:e?s+"px":"100%",transform:"translate"+(e?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:h(),style:a,on:Object(o["a"])({},this.$listeners)},[this.slots()])}}),l=(e("8270"),e("1325")),f=e("3875");function d(t){function i(){this.binded||(t.call(this,l["b"],!0),this.binded=!0)}function e(){this.binded&&(t.call(this,l["a"],!1),this.binded=!1)}return{mounted:i,activated:i,deactivated:e,beforeDestroy:e}}var p=e("4598"),v=e("482d"),m=Object(a["a"])("swipe"),g=m[0],w=m[1],b=g({mixins:[f["a"],d((function(t,i){t(window,"resize",this.onResize,!0),i?this.initialize():this.clear()}))],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach((function(t){t.offset=0})),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(l["c"])(t,!0),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count;return t?this.loop?Object(v["a"])(i+t,-1,e):Object(v["a"])(i+t,0,e-1):i},getTargetOffset:function(t,i){var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var n=Math.round(i-e);return this.loop||(n=Object(v["a"])(n,this.minOffset,0)),n},move:function(t){var i=t.pace,e=void 0===i?0:i,n=t.offset,s=void 0===n?0:n,o=t.emitChange,a=this.loop,c=this.count,r=this.active,h=this.swipes,u=this.trackSize,l=this.minOffset;if(!(c<=1)){var f=this.getTargetActive(e),d=this.getTargetOffset(f,s);if(a){if(h[0]){var p=d<l;h[0].offset=p?u:0}if(h[c-1]){var v=d>0;h[c-1].offset=v?-u:0}}this.active=f,this.offset=d,o&&f!==r&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(p["a"])((function(){var n;n=e.loop&&t===e.count?0===e.active?0:t:t%e.count,e.move({pace:n-e.active,emitChange:!0}),i.immediate?Object(p["a"])((function(){e.swiping=!1})):e.swiping=!1}))},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(p["a"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()}))}),i))},renderIndicator:function(){var t=this,i=this.$createElement,e=this.count,n=this.activeIndicator,s=this.slots("indicator");return s||(this.showIndicators&&e>1?i("div",{class:w("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map((function(e,s){return i("i",{class:w("indicator",{active:s===n}),style:s===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:w()},[t("div",{ref:"track",style:this.trackStyle,class:w("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.renderIndicator()])}}),y={name:"home",components:{Swipe:b,SwipeItem:u},data:function(){return{list:[{name:"使用AE生成动画",link:"/lottie"},{name:"移动端手势",link:"/hammertime"},{name:"vant组件",link:"/vant"},{name:"表单组件",link:"/form"},{name:"视频",link:"/video"}]}}},S=y,k=(e("987c"),e("2877")),C=Object(k["a"])(S,n,s,!1,null,"6dba63a6",null);i["default"]=C.exports},8270:function(t,i,e){},"987c":function(t,i,e){"use strict";var n=e("003c"),s=e.n(n);s.a},eca3:function(t,i,e){t.exports=e.p+"img/ex_2.4fcfc79e.png"}}]);