(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},i={app:0},a={app:0},r=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2ff1c2ea"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"12b8d265"}[t]+".css",a=l.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===a))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],u=c.getAttribute("data-href");if(u===o||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[t],d.parentNode.removeChild(d),n(r)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){i[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var f=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07bb":function(t,e,n){},"147d":function(t,e,n){"use strict";var o=n("7263"),i=n.n(o);i.a},1944:function(t,e,n){"use strict";var o=n("81ad"),i=n.n(o);i.a},"1c2d":function(t,e,n){},2888:function(t,e,n){"use strict";var o=n("c42f"),i=n.n(o);i.a},"38f7":function(t,e,n){},"3cff":function(t,e,n){"use strict";var o=n("e03a"),i=n.n(o);i.a},"42d4":function(t,e,n){},"45dc":function(t,e,n){},"4e9c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAABRCAIAAADkRlWIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMDEwMzI2MERCNTkxMUU5OTcwN0VEMjc4MEVFQkEwQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMDEwMzI2MURCNTkxMUU5OTcwN0VEMjc4MEVFQkEwQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBGQzU5NEQ5REI1OTExRTk5NzA3RUQyNzgwRUVCQTBCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBGQzU5NERBREI1OTExRTk5NzA3RUQyNzgwRUVCQTBCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BFXqwAAACMRJREFUeNrsXWtMFFcY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"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("router-view")],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"frameTitle"},[o("img",{staticClass:"wkqLogo",attrs:{src:n("4e9c")}}),t._v("Wkq-UI\n  ")])}],r={name:"app"},s=r,l=(n("852f"),n("b0a0"),n("2877")),c=Object(l["a"])(s,i,a,!1,null,"a073c238",null),u=c.exports,f=n("8c4f");o["default"].use(f["a"]);var d=new f["a"]({routes:[{path:"/",name:"main",component:function(){return n.e("about").then(n.bind(null,"7f94"))},redirect:"/home",children:[{path:"/home",name:"home",component:function(){return n.e("about").then(n.bind(null,"2961"))}},{path:"/use",name:"use",component:function(){return n.e("about").then(n.bind(null,"09e0"))}},{path:"/bus",name:"bus",component:function(){return n.e("about").then(n.bind(null,"e76d"))}},{path:"/isWeChat",name:"home",component:function(){return n.e("about").then(n.bind(null,"09c6"))}},{path:"/confirm",name:"confirm",component:function(){return n.e("about").then(n.bind(null,"6b51"))}},{path:"/sku",name:"sku",component:function(){return n.e("about").then(n.bind(null,"6fbc"))}},{path:"/countButton",name:"countButton",component:function(){return n.e("about").then(n.bind(null,"9d58"))}},{path:"/floatButton",name:"floatButton",component:function(){return n.e("about").then(n.bind(null,"c23d"))}},{path:"/tab",name:"tab",component:function(){return n.e("about").then(n.bind(null,"50ef"))}},{path:"/loading",name:"loading",component:function(){return n.e("about").then(n.bind(null,"71cc"))}},{path:"/priceFilter",name:"priceFilter",component:function(){return n.e("about").then(n.bind(null,"f497"))}}]}]}),h=d,b=n("5c96"),p=n.n(b),m=(n("0fae"),n("c5f6"),function(t){t.filter("price",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"￥",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=parseFloat(t).toFixed(Number(n));return e+o}))}),g=m,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"loading"},[o("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",duration:{enter:50,leave:300}}},[t.show?o("div",{staticClass:"bg",style:{height:t.height,background:t.bg},on:{touchmove:function(t){t.preventDefault()}}},[o("div",{staticClass:"box"},[o("img",{attrs:{src:n("cf05")}})]),o("p",{style:{color:t.textColor}},[t._v(t._s(t.text))])]):t._e()])],1)},y=[],k={name:"loading",mounted:function(){},props:{father:{},show:{type:Boolean,default:!0},img:{type:String,default:""},text:{type:String,default:"加载中，请稍后"},textColor:{type:String,default:"rgb(255,255,255)"},bg:{type:String,default:"rgba(0,0,0,0.3)"},height:{type:String,default:"100%"}},methods:{notScroll:function(t){t.preventDefault()}}},w=k,S=(n("2888"),Object(l["a"])(w,v,y,!1,null,"0bcfcfa0",null)),C=S.exports,B=function(t){var e,n=t.extend(C);e=new n,e.$mount(),t.directive("wLoading",(function(t,n,o){e.show=n.value,o.data.attrs&&(o.data.attrs.text&&(e.text=o.data.attrs.text),o.data.attrs.textColor&&(e.textColor=o.data.attrs.textColor),o.data.attrs.bg&&(e.bg=o.data.attrs.bg)),n.value?t.appendChild(e.$el):t.hasOwnProperty(e.$el)&&t.removeChild(e.$el)}))},E=B,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bigBox"},[n("ul",{staticClass:"flexBox"},[n("li",{on:{click:function(e){return t.jump("/store/home")}}},[n("div",{staticClass:"spaceButton"},["/store/home"===t.$route.path?n("van-icon",{attrs:{name:"wap-home",size:".42rem",color:"#f00"}}):n("van-icon",{attrs:{name:"wap-home",size:".42rem",color:"#999"}}),n("p",{class:{selected:"/store/home"===t.$route.path}},[t._v("首页")])],1)]),n("li",{on:{click:function(e){return t.jump("/my")}}},[n("div",{staticClass:"spaceButton"},["/my"===t.$route.path?n("van-icon",{attrs:{name:"contact",size:".42rem",color:"#f00"}}):n("van-icon",{attrs:{name:"contact",size:".42rem",color:"#999"}}),n("p",{class:{selected:"/my"===t.$route.path}},[t._v("我的")])],1)])])])},j=[],A={name:"BottomNav",data:function(){return{}},mounted:function(){},methods:{jump:function(t){this.$router.push({path:t,query:{}})}}},N=A,O=(n("147d"),Object(l["a"])(N,x,j,!1,null,"6a9c6d12",null)),M=O.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("ul",{staticClass:"top",style:{height:t.height,background:t.background,borderBottom:t.borderBottom,position:t.position}},[n("li",{staticClass:"left"},[t._t("left")],2),n("li",{staticClass:"center"},[t._t("center")],2),n("li",{staticClass:"right"},[t._t("right")],2)])])},I=[],T={name:"navBar",props:{background:{type:String,default:"white"},position:{type:String,default:"fixed"},borderBottom:{type:String,default:"solid 1px #f2f2f2"},height:{type:String,default:"0.88rem"}}},W=T,R=(n("bcb0"),Object(l["a"])(W,D,I,!1,null,"5b5e993d",null)),Z=R.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabBigBox"},[n("ul",{staticClass:"tabBox"},t._l(t.tabData,(function(e,o){return n("li",{key:o,style:{color:o===t.nowTab?t.selectedColor:t.color},on:{click:function(n){return t.changeTab(e,o)}}},[t._v(t._s(e[t.label]))])})),0),n("div",{staticClass:"slider",class:{cTransition:!0},style:{width:100/t.tabData.length+"%",marginLeft:100*t.nowTab/t.tabData.length+"%"}},[n("div",{staticClass:"relSlider",style:{width:t.sliderWidth,backgroundColor:t.selectedColor}})])])},_=[],L=(n("ac6a"),{name:"tab",props:{tabData:{type:Array},transition:{type:Boolean,default:!0},sliderWidth:{type:String,default:"70%"},color:{type:String,default:"#666"},label:{type:String,default:"name"},selectedColor:{type:String,default:"red"},defaultTab:null},data:function(){return{nowTab:0}},created:function(){var t=this;this.defaultTab&&this.tabData.forEach((function(e,n){JSON.stringify(e)===JSON.stringify(t.defaultTab)&&(t.nowTab=n)}))},methods:{changeTab:function(t,e){this.nowTab=e,this.$emit("tabChange",t)}}}),X=L,P=(n("e09e"),Object(l["a"])(X,G,_,!1,null,"d47adba4",null)),z=P.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeButtonBox",class:{disable:t.timeShow,available:!t.timeShow},style:{color:t.nowColor,backgroundColor:t.nowBg,border:" solid 1px "+t.nowBg},on:{click:t.send}},[t.timeShow?n("div",[t._v("\n        "+t._s(t.countDownNum)+"s后重发\n    ")]):n("div",[t._v("\n        获取\n    ")])])},F=[],U={name:"tab",props:{time:{type:Number,default:60},availableBgColor:{type:String,default:"#ff4444"},availableColor:{type:String,default:"#ffffff"},disableBgColor:{type:String,default:"#dddddd"},disableColor:{type:String,default:"#ffffff"}},data:function(){return{timeShow:!1,countDownNum:60,nowColor:"",nowBg:""}},created:function(){this.nowBg=this.availableBgColor,this.nowColor=this.availableColor},methods:{send:function(){this.timeShow?this.$emit("disableClick",this.countDownNum):this.$emit("send")},next:function(){this.nowBg=this.disableBgColor,this.nowColor=this.disableColor,this.timeShow=!0,this.countDownNum=this.time-1,this.countDown()},countDown:function(){var t=this;setTimeout((function(){t.countDownNum-=1,t.countDownNum>=1?t.countDown():(t.timeShow=!1,t.nowBg=t.availableBgColor,t.nowColor=t.availableColor)}),1e3)}}},Q=U,Y=(n("bf3f"),Object(l["a"])(Q,J,F,!1,null,"44d5494f",null)),H=Y.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-control-panel",on:{click:t.clickEvent}},[n("div",{ref:"floatBubble",class:["float-bubble",t.touching?"active":"",t.isPullOver?"pull-over":""],style:t.calcFloatStyle,on:{touchstart:t._touchStart,touchmove:function(e){return e.preventDefault(),e.stopPropagation(),t._touchMove(e)},touchend:t._touchEnd}},[t._t("default")],2)])},q=[],K=(n("8449"),500),$={name:"vue-free-bubble",created:function(){this.touch={}},props:{size:{type:Number,default:50},isFreeMove:{type:Boolean,default:!0},distanceToEdge:{type:Number,default:0}},data:function(){return{touching:!1,isPullOver:!1,floatStyle:{},bubbleSize:this.size}},computed:{calcFloatStyle:function(){return{left:this.floatStyle.left+"px",top:this.floatStyle.top+"px",height:this.bubbleSize+"px",width:this.bubbleSize+"px"}}},mounted:function(){var t=this.$refs.floatBubble;this.floatStyle={left:t.offsetLeft,top:t.offsetTop}},methods:{_getWindowSize:function(){var t=this.$refs.floatBubble.parentNode.parentNode,e=t.clientWidth,n=t.clientHeight;return{width:e,height:n}},_touchStart:function(t){var e=this.$refs["floatBubble"],n={offsetLeft:e.offsetLeft,offsetTop:e.offsetTop},o=t.touches[0],i=o.pageX,a=o.pageY;this.anchor={pageX:i,pageY:a,offsetLeft:n.offsetLeft,offsetTop:n.offsetTop},this.touching=!0},_touchMove:function(t){var e=t.touches[0],n={x:this.anchor.pageX-e.pageX|0,y:this.anchor.pageY-e.pageY|0};this.floatStyle={left:this.anchor.offsetLeft-n.x,top:this.anchor.offsetTop-n.y},this._insideLimit()},_touchEnd:function(t){var e=this;if(this.touching=!1,!this.isFreeMove){this.isPullOver=!0;var n=t.target.offsetWidth,o=this._getWindowSize().width;this.floatStyle.left<(o-n)/2?this.floatStyle.left=this.distanceToEdge:this.floatStyle.left=o-n-this.distanceToEdge}setTimeout((function(){e.isPullOver=!1}),K)},_insideLimit:function(){var t=this.$refs.floatBubble,e=this.floatStyle,n=e.left,o=e.top,i=this._getWindowSize(),a=i.width,r=i.height;o<0&&(o=0),o>r-t.offsetHeight&&(o=r-t.offsetHeight),n<0&&(n=0),n>a-t.offsetHeight&&(n=a-t.offsetHeight),this.floatStyle={left:n,top:o}},clickEvent:function(t){this.$emit("click",t)}}},tt=$,et=(n("e8f6"),Object(l["a"])(tt,V,q,!1,null,"4877a0c5",null)),nt=et.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.sku.tree,(function(e,o){return n("div",{key:o,staticClass:"skuSelectBox"},[n("p",{staticClass:"title"},[t._v(t._s(e.k))]),n("ul",{staticClass:"skuList"},t._l(e.v,(function(o,i){return n("li",{key:i,style:Object.assign({color:t.checkColor(o.disable,o.selected),background:t.checkBgColor(o.disable,o.selected),border:"solid 1px "+t.checkColor(o.disable,o.selected)},t.itemStyle),on:{click:function(n){return t.skuClick(o,e.k_s)}}},[t._v("\n                    "+t._s(o.name)+"\n                ")])})),0)])})),0)},it=[],at=(n("7f7f"),n("8615"),n("456d"),n("55dd"),n("6b54"),n("6762"),n("2fdb"),n("bd86"));function rt(t){for(var e=t,n=[[]],o=0;o<e.length;o++){for(var i=[],a=0;a<n.length;a++)for(var r=0;r<e[o].length;r++)i.push(n[a].concat(e[o][r]));n=i}return n}var st={props:{sku:Object,itemStyle:Object,fontColor:{type:String,default:"#333333"},bgColor:{type:String,default:"#ffffff"},selectedFontColor:{type:String,default:"#ffffff"},selectedBgColor:{type:String,default:"#ffa025"},disableFontColor:{type:String,default:"#dddddd"},disableBgColor:{type:String,default:"#ffffff"}},watch:{},data:function(){return{usable:{},nowDetail:{id:2259,activityPrice:100,sellingPrice:1,s1:"1215",s2:"3026",storageNum:110}}},mounted:function(){var t=this;this.sku.tree.forEach((function(e){e.v.forEach((function(n){t.checkDisable(n,e.k_s,{})}))}))},methods:{checkColor:function(t,e){return t?this.disableFontColor:e?this.selectedFontColor:this.fontColor},checkBgColor:function(t,e){return t?this.disableBgColor:e?this.selectedBgColor:this.bgColor},checkDisable:function(t,e,n){var o=this,i=[],a=e;for(var r in n[e]=t.id,n)i.push(Object(at["a"])({},r,n[r]));var s="";i.forEach((function(t){t[a]&&(s=t[a])}));var l={};this.sku.tree.forEach((function(t){n[t.k_s]?l[t.k_s]=[String(n[t.k_s])]:l[t.k_s]=t.v.map((function(t){return t.id}))}));var c=[];for(var u in l)c.push(l[u]);var f=rt(c);this.sku.list.forEach((function(t){t.allRanking=[],o.sku.tree.forEach((function(e){t.allRanking.push(t[e.k_s])}))})),this.sku.tree.forEach((function(t){t.k_s===a&&t.v.forEach((function(t){if(t.id===s){var e,n=f.filter((function(e){return e.includes(t.id)}));n.forEach((function(t){o.sku.list.forEach((function(n){n.allRanking.sort().toString()===t.sort().toString()&&(e=!0)}))})),t.disable=!e}}))}))},skuSelected:function(t,e){var n=this;this.sku.tree.forEach((function(n){n.k_s===e&&n.v.forEach((function(e){e.id===t.id?e.selected=!0:e.selected=!1}))})),Object.keys(this.usable).length===this.sku.tree.length&&this.sku.list.forEach((function(t){if(String(Object.values(n.usable).sort())===String(t.allRanking.sort())){n.nowDetail=t;var e=[],o="";n.sku.tree.forEach((function(t){t.v.forEach((function(n){n.selected&&(e.push({name:t.k,val:n.name}),o+=n.name+" ")}))})),t.specArray=e,t.specString=o,n.$emit("change",t)}}))},skuSelectedCancel:function(t,e){var n=this;delete this.usable[e],this.sku.tree.forEach((function(o){o.k_s===e&&o.v.forEach((function(e){e.id===t.id&&(e.selected=!1,n.$emit("change",e))}))}))},skuClick:function(t,e){var n=this;if(t.disable)return!1;this.usable[e]=t.id,t.selected?this.skuSelectedCancel(t,e):this.skuSelected(t,e),this.sku.tree.forEach((function(t){t.v.forEach((function(e){var o={};for(var i in n.usable)o[i]=Object.assign(n.usable[i]);o[t.k_s]=e.id,n.checkDisable(e,t.k_s,o)}))}))}}},lt=st,ct=(n("1944"),Object(l["a"])(lt,ot,it,!1,null,"495bcffe",null)),ut=ct.exports,ft=function(t){t.component("w-floatButton",nt),t.component("w-timeButton",H),t.component("w-sku",ut),t.component("w-tab",z),t.component("BottomNav",M),t.component("nav-bar",Z)},dt=ft,ht=(n("4917"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.visible?n("div",{staticClass:"confirmBg",on:{click:function(e){t.visible=!1}}},[n("div",{staticClass:"windowBox",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"tips"},[t._v(t._s(t.message))]),n("div",{staticClass:"bottom"},[n("div",{staticClass:"ok",on:{click:t.ok}},[t._v("确定")]),n("div",{staticClass:"no",on:{click:t.no}},[t._v("取消")])])])]):t._e()])}),bt=[],pt={name:"index",props:{title:{type:String,default:"确认"},message:{type:String,default:"确认这样做吗？"},visible:{type:Boolean,default:!1},confirm:{type:Function},noConfirm:{type:Function},element:{type:Object}},methods:{ok:function(){this.visible=!1,this.confirm&&this.confirm()},no:function(){this.visible=!1,this.noConfirm&&this.noConfirm()}}},mt=pt,gt=(n("3cff"),Object(l["a"])(mt,ht,bt,!1,null,"542374ea",null)),vt=gt.exports,yt=function(t){t.prototype.$isWeiXin=function(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"===t.match(/MicroMessenger/i)},t.prototype.$bus=new t,t.prototype.$wConfirm=function(e){var n,o=t.extend(vt);n=new o,n.$mount(),document.body.appendChild(n.$el),e.title&&(n.title=e.title),e.message&&(n.message=e.message),e.cancel&&(n.noConfirm=e.cancel),e.confirm&&(n.confirm=e.confirm),n.visible=!0}},kt=yt,wt={install:function(t,e){g(t),E(t),dt(t),kt(t)}},St=wt,Ct=n("7a80"),Bt=n.n(Ct);o["default"].use(St),o["default"].use(Bt.a),o["default"].use(p.a),o["default"].config.productionTip=!1,new o["default"]({router:h,render:function(t){return t(u)}}).$mount("#app")},7263:function(t,e,n){},"81ad":function(t,e,n){},"852f":function(t,e,n){"use strict";var o=n("b23d"),i=n.n(o);i.a},b0a0:function(t,e,n){"use strict";var o=n("07bb"),i=n.n(o);i.a},b23d:function(t,e,n){},bcb0:function(t,e,n){"use strict";var o=n("1c2d"),i=n.n(o);i.a},bf3f:function(t,e,n){"use strict";var o=n("38f7"),i=n.n(o);i.a},c42f:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},e03a:function(t,e,n){},e09e:function(t,e,n){"use strict";var o=n("45dc"),i=n.n(o);i.a},e8f6:function(t,e,n){"use strict";var o=n("42d4"),i=n.n(o);i.a}});