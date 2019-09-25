(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"09c6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"th1"},[t._v("判断是否处于微信浏览器")]),a("p",{staticClass:"tp"},[t._v("没什么可多说的，开发中总需要针对尿性的微信浏览器做一些特殊处理，所以封装此方法方便进行操作。")]),a("h2",{staticClass:"th2"},[t._v("使用方法:")]),a("p",{staticClass:"bp"},[a("span",{staticClass:"code"},[t._v("this.$isWeChat()")])]),a("p",{staticClass:"bp"},[t._v("\n        返回值为true则是微信环境，反之则不是。\n    ")])])}],l={data:function(){return{}}},i=l,c=a("2877"),r=Object(c["a"])(i,n,s,!1,null,"1436cbb6",null);e["default"]=r.exports},"09e0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"th1"},[t._v("安装与使用")]),a("p",{staticClass:"tp"},[t._v("使用npm安装此包，然后项目中进行注册后使用")]),a("h2",{staticClass:"th2"},[t._v("npm安装")]),a("p",{staticClass:"code"},[t._v("\n        npm i vue-wkq-ui -S\n    ")]),a("h2",{staticClass:"th2"},[t._v("main.js中")]),a("pre",{staticClass:"code"},[t._v("\n    import wkqUi from 'vue-wkq-ui'\n    Vue.use(wkqUi)\n    import 'vue-wkq-ui/lib/wkqUi.css'\n        ")])])}],l={data:function(){return{}}},i=l,c=(a("63bb"),a("2877")),r=Object(c["a"])(i,n,s,!1,null,"10669a34",null);e["default"]=r.exports},2502:function(t,e,a){},"291b":function(t,e,a){},2961:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"th1"},[t._v("写在前面")]),a("p",{staticClass:"tp"},[t._v("本项目为个人项目,主要为解决日常开发的重复工作,并记录组件使用方法,整体无风格。其中包含常用的方法以及电商常用的组件。此组件愿景是减少重复工作并且可高度定制，以适应不同的设计风格。")]),a("h2",{staticClass:"th2"},[t._v("无风格")]),a("p",{staticClass:"tp"},[t._v("\n        整体组件没有明确成套的设计风格，实际项目中也多是需要按照设计稿改造样式，所以样式都是我随性写的(也可以说我懒)\n    ")]),a("h2",{staticClass:"th2"},[t._v("可塑性")]),a("p",{staticClass:"tp"},[t._v("\n        多数组件只提供最核心部分，以保证组件的可塑性。故不适合原型开发等速成的项目。\n    ")]),a("h2",{staticClass:"th2"},[t._v("更适合作为一些大框架或者个人项目的拓展包")]),a("p",{staticClass:"tp"},[t._v("\n        市面上太多造好的轮子了，而且有些也是十分优秀的。本框架包含的多是些主流框架里没有，或者是重写为符合自身项目需求比较麻烦的组件\n    ")]),a("h2",{staticClass:"th2"},[t._v("这是个人项目")]),a("p",{staticClass:"tp"},[t._v("\n        因为是为了满足自己日常所需，怕忘记自己组件的使用方法，也为了方便同事使用，才有造此框架的念头，方方面面可能都比不过大厂的框架，但可能胜在简单（源码很好理解- -）\n    ")])])}],l={data:function(){return{}}},i=l,c=(a("33e4"),a("2877")),r=Object(c["a"])(i,n,s,!1,null,"0c1ed319",null);e["default"]=r.exports},"33e4":function(t,e,a){"use strict";var n=a("291b"),s=a.n(n);s.a},"3b0c":function(t,e,a){},"50ef":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"th1"},[t._v("Tab选项卡")]),a("p",{staticClass:"tp"},[t._v("tab选项卡，无论是pc还是移动端都是不陌生的，不多解释")]),a("h2",{staticClass:"th2"},[t._v("示例:")]),a("div",{staticClass:"phone"},[a("div",{staticClass:"phoneMain"},[a("w-tab",{staticStyle:{"z-index":"1"},attrs:{tabData:t.tabData,defaultTab:t.defaultTab,label:"name"},on:{tabChange:t.tabChange}})],1)]),a("h2",{staticClass:"th2"},[t._v("template:")]),t._m(0),a("h2",{staticClass:"th2"},[t._v("js:")]),t._m(1),a("h2",{staticClass:"th2"},[t._v("Attributes")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.Attributes}},[a("el-table-column",{attrs:{prop:"attrName",label:"参数",width:"180"}}),a("el-table-column",{attrs:{prop:"explain",label:"说明",width:"180"}}),a("el-table-column",{attrs:{prop:"attrType",label:"类型"}}),a("el-table-column",{attrs:{prop:"optional",label:"可选值"}}),a("el-table-column",{attrs:{prop:"defaultVal",label:"默认值"}})],1),a("h2",{staticClass:"th2"},[t._v("Events")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.Events}},[a("el-table-column",{attrs:{prop:"eventName",label:"事件名",width:"180"}}),a("el-table-column",{attrs:{prop:"explain",label:"说明",width:"300"}}),a("el-table-column",{attrs:{prop:"optional",label:"参数"}})],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{color:"#666"}},[a("pre",[t._v('            <w-tab\n                   :tabData="tabData"\n                   @tabChange="tabChange"\n                   label="name"\n                   :defaultTab="defaultTab">\n\n            </w-tab>\n        ')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{color:"#666"}},[a("pre",[t._v("            "),a("code",[t._v("\nexport default {\n    data() {\n        return {\n            // 根据此参数展示初始tab\n            defaultTab: {\n                name: '待发货',\n                no: 2\n            },\n            tabData:[\n                {\n                    name: '待支付',\n                    no: 0\n                },{\n                    name: '待发货',\n                    no: 2\n                },{\n                    name: '待收货',\n                    no: 3\n                },{\n                    name: '已完成',\n                    no: 4\n                }\n            ]\n        }\n    },\n    methods:{\n        tabChange(item){\n            console.log(item)\n        }\n    }\n}\n            ")]),t._v("\n        ")])])}],l={data:function(){return{defaultTab:{name:"待发货",no:2},tabData:[{name:"待支付",no:0},{name:"待发货",no:2},{name:"待收货",no:3},{name:"已完成",no:4}],Attributes:[{attrName:"tabData",explain:"tab选项卡数据",attrType:"Array",optional:"参考例子中的格式",defaultVal:"--"},{attrName:"label",explain:"tab选项卡每项的名字，将会选择每条对象中的此字段",attrType:"String",optional:"--",defaultVal:"name"},{attrName:"selectedColor",explain:"选中状态下按钮字体和滑块颜色",attrType:"String",optional:"css所识别的颜色值，如:#000000,white,rgb(0,0,0)等",defaultVal:"red"},{attrName:"color",explain:"选中状态下字体颜色",attrType:"String",optional:"css所识别的颜色值，如:#000000,white,rgb(0,0,0)等",defaultVal:"#666666"},{attrName:"sliderWidth",explain:"滑块宽度所占每条选项的百分比",attrType:"String",optional:"百分比",defaultVal:"70%"},{attrName:"transition",explain:"滑块是否开启过渡效果",attrType:"Boolean",optional:"true，false",defaultVal:"true"},{attrName:"defaultTab",explain:"默认选中的选项，需要完全和tabData中的某一项匹配",attrType:"--",optional:"--",defaultVal:"--"}],Events:[{eventName:"tabChange",explain:"选项卡发生变化触发，初始化的时候不会触发",optional:"所点击的tabData全部数据"}]}},methods:{tabChange:function(t){console.log(t)}}},i=l,c=(a("e5c6"),a("2877")),r=Object(c["a"])(i,n,s,!1,null,"da74357e",null);e["default"]=r.exports},"5c4d":function(t,e,a){"use strict";var n=a("3b0c"),s=a.n(n);s.a},"63bb":function(t,e,a){"use strict";var n=a("e15d"),s=a.n(n);s.a},"64be":function(t,e,a){"use strict";var n=a("e205"),s=a.n(n);s.a},"6b51":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"th1"},[t._v("确认框")]),a("p",{staticClass:"tp"},[t._v("通过vue实例进行调用的确认框，实际项目中使用起来更为方便。")]),a("h2",{staticClass:"th2"},[t._v("示例:")]),a("button",{staticStyle:{padding:"2px 10px"},on:{click:t.confirm}},[t._v(" 点击弹出确认 ")]),a("h2",{staticClass:"th2"},[t._v("template:")]),t._m(0),a("h2",{staticClass:"th2"},[t._v("js:")]),t._m(1),a("h2",{staticClass:"th2"},[t._v("Options")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.Attributes}},[a("el-table-column",{attrs:{prop:"attrName",label:"参数",width:"180"}}),a("el-table-column",{attrs:{prop:"explain",label:"说明",width:"180"}}),a("el-table-column",{attrs:{prop:"attrType",label:"类型"}}),a("el-table-column",{attrs:{prop:"optional",label:"可选值"}}),a("el-table-column",{attrs:{prop:"defaultVal",label:"默认值"}})],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{color:"#666"}},[a("pre",[t._v('\n    <button @click="confirm"> 确认 </button>\n        ')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{color:"#666"}},[a("pre",[t._v("            "),a("code",[t._v("\nexport default {\n    data() {\n        return {\n\n        }\n    },\n    methods:{\n        confirm(){\n            this.$wConfirm({\n                title: '消息',\n                message: '你干啥？',\n                cancel(){\n                    alert('没啥，点错了')\n                },\n                confirm(){\n                    alert('就是要点你')\n                }\n            })\n        }\n    }\n}\n            ")]),t._v("\n        ")])])}],l={data:function(){return{Attributes:[{attrName:"title",explain:"确认框标题",attrType:"String",optional:"--",defaultVal:"确认"},{attrName:"message",explain:"提示内容",attrType:"String",optional:"--",defaultVal:"确认这样做吗？"},{attrName:"cancel",explain:"取消回调",attrType:"Function",optional:"--",defaultVal:"--"},{attrName:"confirm",explain:"确认回调",attrType:"Function",optional:"--",defaultVal:"--"}]}},methods:{confirm:function(){this.$wConfirm({title:"消息",message:"你干啥？",cancel:function(){alert("没啥，点错了")},confirm:function(){alert("就是要点你")}})}}},i=l,c=(a("e7a4"),a("2877")),r=Object(c["a"])(i,n,s,!1,null,"12868185",null);e["default"]=r.exports},"6c6a":function(t,e,a){"use strict";var n=a("fc71"),s=a.n(n);s.a},"6fbc":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"th1"},[t._v("SKU选择器")]),a("p",{staticClass:"tp"},[t._v("用于选择商品规格值，参考有赞的数据格式，只提供最核心的选择sku选择功能，以便更好的应用在不同风格的项目中。")]),a("h2",{staticClass:"th2"},[t._v("示例:")]),a("div",{staticClass:"phone"},[a("div",{staticClass:"phoneMain"},[a("w-sku",{attrs:{sku:t.sku},on:{change:t.skuChange}})],1)]),a("h2",{staticClass:"th2"},[t._v("template:")]),t._m(0),a("h2",{staticClass:"th2"},[t._v("js:")]),t._m(1),a("h2",{staticClass:"th2"},[t._v("skuData:")]),a("GeminiScrollbar",{staticClass:"code longCode"},[a("div",{staticStyle:{color:"#666",overflow:"hidden"}},[a("pre",[t._v("            "),a("code",[t._v("\n            sku:{\n                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。\n                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。\n                tree: [\n                    {\n                        k: '颜色', // skuKeyName：规格类目名称\n                        v: [\n                            {\n                                id: '30349', // skuValueId：规格值 id\n                                name: '红色', // skuValueName：规格值名称\n                                imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片\n                                disable: false,\n                                selected: false\n                            }, {\n                                id: '1215',\n                                name: '蓝色',\n                                imgUrl: 'https://img.yzcdn.cn/2.jpg',\n                                disable: false,\n                                selected: false\n                            },{\n                                id: '1217',\n                                name: '绿色',\n                                imgUrl: 'https://img.yzcdn.cn/2.jpg',\n                                disable: false,\n                                selected: false\n                            },{\n                                id: '110',\n                                name: '测试颜色',\n                                imgUrl: 'https://img.yzcdn.cn/2.jpg',\n                                disable: false,\n                                selected: false\n                            }\n                        ],\n                        k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id\n                    },\n                    {\n                        k: '尺码', // skuKeyName：规格类目名称\n                        v: [\n                            {\n                                id: '3026', // skuValueId：规格值 id\n                                name: 'xl', // skuValueName：规格值名称\n                                imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片\n                                disable: false,\n                                selected: false\n                            },\n                            {\n                                id: '1960',\n                                name: 'xxl',\n                                imgUrl: 'https://img.yzcdn.cn/2.jpg',\n                                disable: false,\n                                selected: false\n                            },{\n                                id: '110',\n                                name: '测试尺码',\n                                imgUrl: 'https://img.yzcdn.cn/2.jpg',\n                                disable: false,\n                                selected: false\n                            }\n                        ],\n                        k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id\n                    },\n                    {\n                        k: '性别', // skuKeyName：规格类目名称\n                        v: [\n                            {\n                                id: '1963', // skuValueId：规格值 id\n                                name: '男', // skuValueName：规格值名称\n                                imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片\n                                disable: false,\n                                selected: false\n                            },\n                            {\n                                id: '1964',\n                                name: '女',\n                                imgUrl: 'https://img.yzcdn.cn/2.jpg',\n                                disable: false,\n                                selected: false\n                            },{\n                                id: '110',\n                                name: '测试性别',\n                                imgUrl: 'https://img.yzcdn.cn/2.jpg',\n                                disable: false,\n                                selected: false\n                            }\n                        ],\n                        k_s: 's3' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id\n                    },{\n                        k: '用途', // skuKeyName：规格类目名称\n                        v: [\n                            {\n                                id: '4963', // skuValueId：规格值 id\n                                name: '可复用', // skuValueName：规格值名称\n                                imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片\n                                disable: false,\n                                selected: false\n                            },\n                            {\n                                id: '4964',\n                                name: '一次性',\n                                imgUrl: 'https://img.yzcdn.cn/2.jpg',\n                                disable: false,\n                                selected: false\n                            },\n                            {\n                                id: '110',\n                                name: '测试用途',\n                                imgUrl: 'https://img.yzcdn.cn/2.jpg',\n                                disable: false,\n                                selected: false\n                            }\n                        ],\n                        k_s: 's4' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id\n                    }\n                ],\n                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合\n                list: [\n                    {\n                        id: 2259, // skuId，下单时后端需要\n                        price: 6, // 价格（单位分）\n                        s1: '110', // 规格类目 k_s 为 s1 的对应规格值 id\n                        s2: '110', // 规格类目 k_s 为 s2 的对应规格值 id\n                        s3: '110', // 最多包含3个规格值，为0表示不存在该规格\n                        s4: '110',\n                        stock_num: 110 // 当前 sku 组合对应的库存\n                    },\n                    {\n                        id: 2259, // skuId，下单时后端需要\n                        price: 136, // 价格（单位分）\n                        s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id\n                        s2: '3026', // 规格类目 k_s 为 s2 的对应规格值 id\n                        s3: '1964', // 最多包含3个规格值，为0表示不存在该规格\n                        s4: '4964',\n                        stock_num: 1 // 当前 sku 组合对应的库存\n                    },{\n                        id: 2259, // skuId，下单时后端需要\n                        price: 90, // 价格（单位分）\n                        s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id\n                        s2: '3026', // 规格类目 k_s 为 s2 的对应规格值 id\n                        s3: '1964', // 最多包含3个规格值，为0表示不存在该规格\n                        s4: '4963',\n                        stock_num: 60 // 当前 sku 组合对应的库存\n                    },{\n                        id: 2259, // skuId，下单时后端需要\n                        price: 78, // 价格（单位分）\n                        s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id\n                        s2: '1960', // 规格类目 k_s 为 s2 的对应规格值 id\n                        s3: '1964', // 最多包含3个规格值，为0表示不存在该规格\n                        s4: '4964',\n                        stock_num: 190 // 当前 sku 组合对应的库存\n                    }\n                ]\n            }\n            ")]),t._v("\n        ")])])]),a("p",[t._v("tips: tree为全部可选规格，list为指定spec组成的sku信息")]),a("h2",{staticClass:"th2"},[t._v("change返回值")]),a("p",{staticStyle:{"margin-bottom":"10px"}},[t._v("change的返回值为匹配的list加上固定几个参数，详情如下：")]),t._m(2),a("p",{staticStyle:{"margin-bottom":"10px"}},[t._v("反选所触发的change返回值格式：")]),t._m(3),a("h2",{staticClass:"th2"},[t._v("Attributes")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.Attributes}},[a("el-table-column",{attrs:{prop:"attrName",label:"参数",width:"180"}}),a("el-table-column",{attrs:{prop:"explain",label:"说明",width:"180"}}),a("el-table-column",{attrs:{prop:"attrType",label:"类型"}}),a("el-table-column",{attrs:{prop:"optional",label:"可选值"}}),a("el-table-column",{attrs:{prop:"defaultVal",label:"默认值"}})],1),a("h2",{staticClass:"th2"},[t._v("Events")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.Events}},[a("el-table-column",{attrs:{prop:"eventName",label:"事件名",width:"180"}}),a("el-table-column",{attrs:{prop:"explain",label:"说明",width:"300"}}),a("el-table-column",{attrs:{prop:"optional",label:"参数"}})],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{color:"#666"}},[a("pre",[t._v('            <w-sku\n            :sku="sku"\n            @change="skuChange"\n            >\n            </w-sku>\n        ')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{color:"#666"}},[a("pre",[t._v("            "),a("code",[t._v("\nexport default {\n    data() {\n        return {\n            Attributes:[],\n            Events:[],\n            sku: SkuData  //具体格式请看下文\n        }\n    },\n    methods:{\n        skuChange(data){\n            console.log(data) //具体格式请看下文或者查看控制台\n        }\n    }\n}\n            ")]),t._v("\n        ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code"},[a("pre",[t._v('            {\n                allRanking: ["1215", "1964", "3026", "4964"]\n                id: 2259\n                price: 136\n                s1: "1215"\n                s2: "3026"\n                s3: "1964"\n                s4: "4964"\n                specArray: [\n                    {name: "颜色", val: "蓝色"}\n                    {name: "尺码", val: "xl"}\n                    {name: "性别", val: "女"}\n                    {name: "用途", val: "一次性"}\n                ]\n                specString: "蓝色 xl 女 一次性 "\n                stock_num: 1\n            }\n\n        ')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code"},[a("pre",[t._v('            {\n                disable: false\n                id: "4964"\n                imgUrl: "https://img.yzcdn.cn/2.jpg"\n                name: "一次性"\n                selected: false\n            }\n\n        ')])])}],l={data:function(){return{Attributes:[{attrName:"fontColor",explain:"未选中未失效状态下按钮文字颜色",attrType:"String",optional:"css所识别的颜色值，如:#000000,white,rgb(0,0,0)等",defaultVal:"#333333"},{attrName:"bgColor",explain:"未选中未失效状态下按钮背景颜色",attrType:"String",optional:"css所识别的颜色值，如:#000000,white,rgb(0,0,0)等",defaultVal:"#ffffff"},{attrName:"selectedFontColor",explain:"选中状态下按钮字体颜色",attrType:"String",optional:"css所识别的颜色值，如:#000000,white,rgb(0,0,0)等",defaultVal:"#ffffff"},{attrName:"selectedBgColor",explain:"选中状态下按钮背景颜色",attrType:"String",optional:"css所识别的颜色值，如:#000000,white,rgb(0,0,0)等",defaultVal:"#ffa025"},{attrName:"disableFontColor",explain:"失效状态下按钮字体颜色",attrType:"String",optional:"css所识别的颜色值，如:#000000,white,rgb(0,0,0)等",defaultVal:"#dddddd"},{attrName:"disableBgColor",explain:"失效 状态下按钮背景颜色",attrType:"String",optional:"css所识别的颜色值，如:#000000,white,rgb(0,0,0)等",defaultVal:"#ffffff"},{attrName:"itemStyle",explain:"每个选项的样式，请勿设置背景色及字体颜色，如有需要请按照上面属性修改。",attrType:"Object",optional:"与v-bind:style格式相同",defaultVal:"--"}],Events:[{eventName:"change",explain:"选中的参数可以组成可用sku后触发（每行至少选中一个）。每条反选都会触发此事件，返回数据为反选spec信息。",optional:"changeData（格式请自行操作控制台查看，或者查看上文change返回值）"}],sku:{tree:[{k:"颜色",v:[{id:"30349",name:"红色",imgUrl:"https://img.yzcdn.cn/1.jpg",disable:!1,selected:!1},{id:"1215",name:"蓝色",imgUrl:"https://img.yzcdn.cn/2.jpg",disable:!1,selected:!1},{id:"1217",name:"绿色",imgUrl:"https://img.yzcdn.cn/2.jpg",disable:!1,selected:!1},{id:"110",name:"测试颜色",imgUrl:"https://img.yzcdn.cn/2.jpg",disable:!1,selected:!1}],k_s:"s1"},{k:"尺码",v:[{id:"3026",name:"xl",imgUrl:"https://img.yzcdn.cn/1.jpg",disable:!1,selected:!1},{id:"1960",name:"xxl",imgUrl:"https://img.yzcdn.cn/2.jpg",disable:!1,selected:!1},{id:"110",name:"测试尺码",imgUrl:"https://img.yzcdn.cn/2.jpg",disable:!1,selected:!1}],k_s:"s2"},{k:"性别",v:[{id:"1963",name:"男",imgUrl:"https://img.yzcdn.cn/1.jpg",disable:!1,selected:!1},{id:"1964",name:"女",imgUrl:"https://img.yzcdn.cn/2.jpg",disable:!1,selected:!1},{id:"110",name:"测试性别",imgUrl:"https://img.yzcdn.cn/2.jpg",disable:!1,selected:!1}],k_s:"s3"},{k:"用途",v:[{id:"4963",name:"可复用",imgUrl:"https://img.yzcdn.cn/1.jpg",disable:!1,selected:!1},{id:"4964",name:"一次性",imgUrl:"https://img.yzcdn.cn/2.jpg",disable:!1,selected:!1},{id:"110",name:"测试用途",imgUrl:"https://img.yzcdn.cn/2.jpg",disable:!1,selected:!1}],k_s:"s4"}],list:[{id:2259,price:6,s1:"110",s2:"110",s3:"110",s4:"110",stock_num:110},{id:2259,price:136,s1:"1215",s2:"3026",s3:"1964",s4:"4964",stock_num:1},{id:2259,price:90,s1:"30349",s2:"3026",s3:"1964",s4:"4963",stock_num:60},{id:2259,price:78,s1:"30349",s2:"1960",s3:"1964",s4:"4964",stock_num:190}]}}},methods:{skuChange:function(t){console.log(t)}}},i=l,c=(a("6c6a"),a("2877")),r=Object(c["a"])(i,n,s,!1,null,"2cda165c",null);e["default"]=r.exports},"71cc":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"th1"},[t._v("Loading指令")]),t._m(0),a("h2",{staticClass:"th2"},[t._v("示例:")]),a("div",{staticClass:"phone"},[a("div",{directives:[{name:"wLoading",rawName:"v-wLoading",value:t.loadingFlag,expression:"loadingFlag"}],staticClass:"phoneMain"},[t._v("\n            我是背景\n        ")])]),a("div",{staticStyle:{"margin-top":"10px"}},[a("button",{on:{click:function(e){t.loadingFlag=!0}}},[t._v("开启loading")]),a("button",{on:{click:function(e){t.loadingFlag=!1}}},[t._v("结束loading")])]),a("p",{staticClass:"bp"},[t._v("tips：要保证希望覆盖的节点设置过position，不然可能会超出容器")]),a("h2",{staticClass:"th2"},[t._v("template:")]),t._m(1),a("h2",{staticClass:"th2"},[t._v("js:")]),t._m(2),a("h2",{staticClass:"th2"},[t._v("Attributes")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.Attributes}},[a("el-table-column",{attrs:{prop:"attrName",label:"参数",width:"180"}}),a("el-table-column",{attrs:{prop:"explain",label:"说明",width:"180"}}),a("el-table-column",{attrs:{prop:"attrType",label:"类型"}}),a("el-table-column",{attrs:{prop:"optional",label:"可选值"}}),a("el-table-column",{attrs:{prop:"defaultVal",label:"默认值"}})],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"tp"},[t._v("加载数据等待期间，展示给用户。将想覆盖的标签写入v-wLoading即可,"),a("span",{staticClass:"warning"},[t._v("v-loading值为true或者false")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{color:"#666"}},[a("pre",[t._v('            <div v-wLoading="loadingFlag">\n                我是背景\n            </div>\n        ')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{color:"#666"}},[a("pre",[t._v("            "),a("code",[t._v("\nexport default {\n    data() {\n        return {\n            loadingFlag: false\n        }\n    }\n}\n            ")]),t._v("\n        ")])])}],l={data:function(){return{loadingFlag:!1,Attributes:[{attrName:"text",explain:"文字提示内容",attrType:"String",optional:"--",defaultVal:"加载中，请稍后"},{attrName:"textColor",explain:"提示文字颜色",attrType:"String",optional:"css所识别的颜色值，如:#000000,white,rgb(0,0,0)等",defaultVal:"rgb(255,255,255)"},{attrName:"bg",explain:"选中状态下按钮字体颜色",attrType:"String",optional:"背景色，建议使用rgba",defaultVal:"rgba(0,0,0,0.3)"}],Events:[{eventName:"change",explain:"选中的参数可以组成可用sku后触发（每行至少选中一个）。每条反选都会触发此事件，返回数据为反选spec信息。",optional:"changeData（格式请自行操作控制台查看，或者查看上文change返回值）"}]}},methods:{skuChange:function(t){console.log(t)}}},i=l,c=(a("64be"),a("2877")),r=Object(c["a"])(i,n,s,!1,null,"26a02db6",null);e["default"]=r.exports},7579:function(t,e,a){},"7f94":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"homeBox"},[a("GeminiScrollbar",{staticClass:"leftNav"},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.$route.path},on:{open:t.handleOpen,close:t.handleClose}},[a("el-menu-item",{attrs:{index:"/home"},on:{click:function(e){return t.jump("/home")}}},[t._v("说明")]),a("el-menu-item",{attrs:{index:"/home"},on:{click:function(e){return t.jump("/use")}}},[t._v("安装与使用")]),a("el-menu-item-group",[a("template",{slot:"title"},[t._v("实例方法")]),a("el-menu-item",{attrs:{index:"/bus"},on:{click:function(e){return t.jump("/bus")}}},[t._v("bus")]),a("el-menu-item",{attrs:{index:"/isWeChat"},on:{click:function(e){return t.jump("/isWeChat")}}},[t._v("是否微信环境")]),a("el-menu-item",{attrs:{index:"/confirm"},on:{click:function(e){return t.jump("/confirm")}}},[t._v("确认框")])],2),a("el-menu-item-group",{attrs:{title:"UI组件"}},[a("el-menu-item",{attrs:{index:"/countButton"},on:{click:function(e){return t.jump("/countButton")}}},[t._v("倒计时按钮")]),a("el-menu-item",{attrs:{index:"/sku"},on:{click:function(e){return t.jump("/sku")}}},[t._v("sku选择器")]),a("el-menu-item",{attrs:{index:"/floatButton"},on:{click:function(e){return t.jump("/floatButton")}}},[t._v("悬浮按钮")]),a("el-menu-item",{attrs:{index:"/tab"},on:{click:function(e){return t.jump("/tab")}}},[t._v("Tab选项卡")])],1),a("el-menu-item-group",{attrs:{title:"自定义指令"}},[a("el-menu-item",{attrs:{index:"/loading"},on:{click:function(e){return t.jump("/loading")}}},[t._v("loading")])],1),a("el-menu-item-group",{attrs:{title:"过滤器"}},[a("el-menu-item",{attrs:{index:"/priceFilter"},on:{click:function(e){return t.jump("/priceFilter")}}},[t._v("价格过滤器")])],1)],1)],1),a("div",{staticClass:"routerBox"},[a("router-view")],1)],1)},s=[],l={data:function(){return{}},methods:{jump:function(t){this.$router.push(t)},handleOpen:function(){},handleClose:function(){}}},i=l,c=(a("aa34"),a("2877")),r=Object(c["a"])(i,n,s,!1,null,"e09ac27e",null);e["default"]=r.exports},"9d58":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"th1"},[t._v("倒计时按钮")]),a("p",{staticClass:"tp"},[t._v("最常见的就是应用于发完短信，然后倒计时等待的场景。")]),a("h2",{staticClass:"th2"},[t._v("示例:")]),a("w-timeButton",{ref:"timeButton",staticStyle:{width:"100px"},attrs:{time:5},on:{send:t.buttonClick,disableClick:t.disableClick}}),a("h2",{staticClass:"th2"},[t._v("template:")]),t._m(0),a("h2",{staticClass:"th2"},[t._v("js:")]),t._m(1),a("p",[t._v("tips: 需要通过ref来注册组件，点击后如果想开始倒计时需要调用组件上的next方法")]),a("h2",{staticClass:"th2"},[t._v("Attributes")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.Attributes}},[a("el-table-column",{attrs:{prop:"date",label:"参数",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"说明",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"类型"}}),a("el-table-column",{attrs:{prop:"optional",label:"可选值"}}),a("el-table-column",{attrs:{prop:"defaultVal",label:"默认值"}})],1),a("h2",{staticClass:"th2"},[t._v("Events")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.Events}},[a("el-table-column",{attrs:{prop:"date",label:"方法名",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"说明",width:"300"}}),a("el-table-column",{attrs:{prop:"address",label:"参数"}})],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{color:"#666"}},[a("pre",[t._v('            <w-timeButton\n            :time="5"\n            @send="buttonClick"\n            @disableClick="disableClick"\n            ref="timeButton"\n            style="width: 100px">\n            </w-timeButton>\n        ')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{color:"#666"}},[a("pre",[t._v("            "),a("code",[t._v("\n                export default {\n                    data() {\n                        return {}\n                    },\n                    methods:{\n                        buttonClick(){\n                            // 模拟网络请求\n                            setTimeout(()=>{\n                                this.$refs.timeButton.next()\n                            },300)\n                        },\n                        disableClick(time){\n                            alert(`请${time}s后再次尝试`)\n                        }\n                    }\n                }\n            ")]),t._v("\n        ")])])}],l={data:function(){return{Attributes:[{date:"time",name:"总的倒计时时间",address:"Number",optional:"--",defaultVal:"60"},{date:"availableBgColor",name:"可点击状态下的背景颜色",address:"String",optional:"--",defaultVal:"#ff4444"},{date:"availableColor",name:"可点击状态下字体颜色",address:"String",optional:"--",defaultVal:"#ffffff"},{date:"disableBgColor",name:"不可点击状态下的背景颜色",address:"String",optional:"--",defaultVal:"#dddddd"},{date:"disableColor",name:"不可点击状态下字体颜色",address:"String",optional:"--",defaultVal:"#ffffff"}],Events:[{date:"send",name:"用户点击按钮后触发的事件",address:"--"},{date:"disableClick",name:"用户点击无效状态下按钮触发的事件",address:"time (当前倒计时秒数)"}]}},methods:{buttonClick:function(){var t=this;setTimeout((function(){t.$refs.timeButton.next()}),300)},disableClick:function(t){alert("请".concat(t,"s后再次尝试"))}}},i=l,c=(a("5c4d"),a("2877")),r=Object(c["a"])(i,n,s,!1,null,"a0e6797a",null);e["default"]=r.exports},"9e46":function(t,e,a){},aa34:function(t,e,a){"use strict";var n=a("2502"),s=a.n(n);s.a},b573:function(t,e,a){},c23d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"th1"},[t._v("可拖动悬浮按钮")]),t._m(0),a("h2",{staticClass:"th2"},[t._v("示例:")]),a("div",{staticClass:"phone"},[a("div",{staticClass:"phoneMain"},[a("w-floatButton",{attrs:{size:t.bSize,isFreeMove:t.bIsFreeMove,distanceToEdge:t.bDistanceToEdge},on:{click:t.bubbleClick}},[a("div",{staticClass:"iconBox"},[t._v("\n                    slot\n                ")])])],1)]),a("h2",{staticClass:"th2"},[t._v("template:")]),t._m(1),a("h2",{staticClass:"th2"},[t._v("js:")]),t._m(2),a("h2",{staticClass:"th2"},[t._v("Attributes")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.Attributes}},[a("el-table-column",{attrs:{prop:"attrName",label:"参数",width:"180"}}),a("el-table-column",{attrs:{prop:"explain",label:"说明",width:"180"}}),a("el-table-column",{attrs:{prop:"attrType",label:"类型"}}),a("el-table-column",{attrs:{prop:"optional",label:"可选值"}}),a("el-table-column",{attrs:{prop:"defaultVal",label:"默认值"}})],1),a("h2",{staticClass:"th2"},[t._v("Events")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.Events}},[a("el-table-column",{attrs:{prop:"eventName",label:"事件名",width:"180"}}),a("el-table-column",{attrs:{prop:"explain",label:"说明",width:"300"}}),a("el-table-column",{attrs:{prop:"optional",label:"参数"}})],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"tp"},[t._v("可在指定区域内拖动的悬浮按钮,可用于购物车等按钮，由于基于touch事件开发，"),a("span",{staticClass:"warning"},[t._v("pc上无法体验，请开启手机调试模式或者使用手机。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{color:"#666"}},[a("pre",[t._v('            <w-floatButton\n                    :size="bSize"\n                    :isFreeMove="bIsFreeMove"\n                    :distanceToEdge = "bDistanceToEdge"\n                    @click="bubbleClick">\n                <div class="iconBox">\n                    slot\n                </div>\n            </w-floatButton>\n        ')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{color:"#666"}},[a("pre",[t._v("            "),a("code",[t._v("\nexport default {\n    data() {\n        return {\n            bSize: 50,\n            bIsFreeMove: false,\n            bDistanceToEdge: 10\n        }\n    },\n    methods:{\n        bubbleClick(){\n            alert('点击悬浮按钮')\n        }\n    }\n}\n            ")]),t._v("\n        ")])])}],l={data:function(){return{bSize:50,bIsFreeMove:!1,bDistanceToEdge:10,Attributes:[{attrName:"size",explain:"按钮大小",attrType:"Number",optional:"--",defaultVal:50},{attrName:"isFreeMove",explain:"true 随意移动，最终停靠在移动后的位置；false 最终会靠边儿停靠",attrType:"Boolean",optional:"--",defaultVal:"true"},{attrName:"distanceToEdge",explain:"距离边界的值",attrType:"Number",optional:"--",defaultVal:"0"}],Events:[{eventName:"click",explain:"原生事件",optional:"--"}]}},methods:{bubbleClick:function(){alert("点击悬浮按钮")}}},i=l,c=(a("d174"),a("2877")),r=Object(c["a"])(i,n,s,!1,null,"5834a4e6",null);e["default"]=r.exports},d174:function(t,e,a){"use strict";var n=a("b573"),s=a.n(n);s.a},e15d:function(t,e,a){},e205:function(t,e,a){},e5c6:function(t,e,a){"use strict";var n=a("7579"),s=a.n(n);s.a},e76d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"th1"},[t._v("BUS 数据方法中转")]),a("p",{staticClass:"tp"},[t._v("实际项目中有不同组件间互相调用方法的需求，父调子是很简单的，靠着便利的ref注册下就可以实现，但兄弟组件或者子调用父的，还是bus来得轻松。")]),a("h2",{staticClass:"th2"},[t._v("使用方法:")]),a("p",{staticClass:"bp"},[t._v("\n        发起事件的组件："),a("span",{staticClass:"code"},[t._v("this.$bus.$emit('方法名', 参数)")])]),a("p",{staticClass:"bp"},[t._v("\n        被触发的组件："),a("span",{staticClass:"code"},[t._v("created() {"),a("br"),t._v("\n                 this.$bus.$on('方法名', (参数) => {  //获取传递的参数并进行操作\n      })"),a("br"),t._v("\n    }")])]),a("p",{staticClass:"tp"},[t._v(" tips:被触发的组件需要在生命周期中进行事件绑定，可是mounted也可是created 等 ")])])}],l={data:function(){return{}}},i=l,c=a("2877"),r=Object(c["a"])(i,n,s,!1,null,"3ba2c35c",null);e["default"]=r.exports},e7a4:function(t,e,a){"use strict";var n=a("9e46"),s=a.n(n);s.a},f497:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"th1"},[t._v("价格过滤器")]),a("p",{staticClass:"tp"},[t._v("实际项目中有不同组件间互相调用方法的需求，父调子是很简单的，靠着便利的ref注册下就可以实现，但兄弟组件或者子调用父的，还是bus来得轻松。")]),a("h2",{staticClass:"th2"},[t._v("示例:")]),a("p",{staticClass:"bp"},[t._v("\n        默认过滤："),a("span",{staticClass:"code"},[t._v(t._s(t._f("price")(60)))])]),a("p",{staticClass:"bp"},[t._v("\n        保留0位小数："),a("span",{staticClass:"code"},[t._v(t._s(t._f("price")(60,"￥",0)))])]),a("p",{staticClass:"bp"},[t._v("\n        保留一位小数："),a("span",{staticClass:"code"},[t._v(t._s(t._f("price")(60,"￥",1)))])]),a("p",{staticClass:"bp"},[t._v("\n        美元："),a("span",{staticClass:"code"},[t._v(t._s(t._f("price")(60,"$",2)))])]),a("h2",{staticClass:"th2"},[t._v("template:")]),t._m(0),a("p",{staticClass:"bp"},[t._v("\n        tips：如果出现小数位数被截取部分不为0，并不会四舍五入等操作，而是直接舍去多余部分\n    ")])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code",staticStyle:{color:"#666"}},[a("pre",{pre:!0},[t._v('\n     <p class="bp">\n        默认过滤： <span class="code">{{60 | price}} </span>\n     </p>\n     <p class="bp">\n        保留0位小数： <span class="code">{{60 | price(\'￥\', 0)}} </span>\n     </p>\n     <p class="bp">\n        保留一位小数： <span class="code">{{60 | price(\'￥\', 1)}} </span>\n     </p>\n     <p class="bp">\n        美元： <span class="code">{{60 | price(\'$\', 2)}} </span>\n     </p>\n        ')])])}],l={data:function(){return{}},mounted:function(){}},i=l,c=a("2877"),r=Object(c["a"])(i,n,s,!1,null,"3e8aeae3",null);e["default"]=r.exports},fc71:function(t,e,a){}}]);