(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form"],{"371d":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form_wrap"},[r("FormC",{ref:"form"},[r("FormInput",{attrs:{rule:e.rules.userName,label:"姓名姓名"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}}),r("FormInput",{attrs:{rule:e.rules.id,label:"id"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}}),r("FormSelect",{attrs:{label:"城市",required:""},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}},[r("option",{attrs:{value:""}},[e._v("请选择")]),r("option",{attrs:{value:"2"}},[e._v("北京")]),r("option",{attrs:{value:"3"}},[e._v("上海")])]),r("button",{on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("onSubmit")]),e._l(50,(function(t){return r("div",{key:t},[e._v("test")])})),r("FormInput",{attrs:{rule:e.rules.id,label:"id"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}}),r("div",[e._v("test")]),r("div",[e._v("test")])],2)],1)},n=[],a={name:"formPage",data:function(){var e=function(e,t){t()},t=function(e,t){t()};return{form:{userName:"",id:"",city:""},rules:{userName:{required:"请输入姓名",validator:e},id:{required:"请输入id",validator:t}}}},methods:{onSubmit:function(){this.$refs.form.validate().then((function(){console.log("可以提交")}))}}},i=a,u=(r("fa34"),r("2877")),l=Object(u["a"])(i,o,n,!1,null,"13785485",null);t["default"]=l.exports},a6f3:function(e,t,r){},fa34:function(e,t,r){"use strict";var o=r("a6f3"),n=r.n(o);n.a}}]);