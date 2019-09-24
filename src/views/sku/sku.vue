<template>
    <div>
        <h1 class="th1">SKU选择器</h1>
        <p class="tp">用于选择商品规格值，参考有赞的数据格式，只提供最核心的选择sku选择功能，以便更好的应用在不同风格的项目中。</p>
        <h2 class="th2">示例:</h2>
        <div class="phone">
            <div class="phoneMain">
                <w-sku :sku="sku" @change="skuChange"></w-sku>
            </div>

        </div>
        <h2 class="th2">template:</h2>
        <div class="code" style="color: #666">
            <pre>
                &lt;w-sku
                :sku="sku"
                @change="skuChange"
                &gt;
                &lt;/w-sku&gt;
            </pre>
        </div>
        <h2 class="th2">js:</h2>
        <div class="code" style="color: #666">
            <pre>
                <code>
    export default {
        data() {
            return {
                Attributes:[],
                Events:[],
                sku: SkuData  //具体格式请看下文
            }
        },
        methods:{
            skuChange(data){
                console.log(data) //具体格式请看下文或者查看控制台
            }
        }
    }
                </code>
            </pre>
        </div>
        <h2 class="th2">skuData:</h2>
        <GeminiScrollbar class="code longCode" >
            <div style="color: #666;overflow: hidden">
            <pre>
                <code>
                sku:{
                    // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                    tree: [
                        {
                            k: '颜色', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '30349', // skuValueId：规格值 id
                                    name: '红色', // skuValueName：规格值名称
                                    imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                                    disable: false,
                                    selected: false
                                }, {
                                    id: '1215',
                                    name: '蓝色',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                },{
                                    id: '1217',
                                    name: '绿色',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                },{
                                    id: '110',
                                    name: '测试颜色',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                }
                            ],
                            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        },
                        {
                            k: '尺码', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '3026', // skuValueId：规格值 id
                                    name: 'xl', // skuValueName：规格值名称
                                    imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                                    disable: false,
                                    selected: false
                                },
                                {
                                    id: '1960',
                                    name: 'xxl',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                },{
                                    id: '110',
                                    name: '测试尺码',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                }
                            ],
                            k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        },
                        {
                            k: '性别', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '1963', // skuValueId：规格值 id
                                    name: '男', // skuValueName：规格值名称
                                    imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                                    disable: false,
                                    selected: false
                                },
                                {
                                    id: '1964',
                                    name: '女',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                },{
                                    id: '110',
                                    name: '测试性别',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                }
                            ],
                            k_s: 's3' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        },{
                            k: '用途', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '4963', // skuValueId：规格值 id
                                    name: '可复用', // skuValueName：规格值名称
                                    imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                                    disable: false,
                                    selected: false
                                },
                                {
                                    id: '4964',
                                    name: '一次性',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                },
                                {
                                    id: '110',
                                    name: '测试用途',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                }
                            ],
                            k_s: 's4' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        }
                    ],
                    // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                    list: [
                        {
                            id: 2259, // skuId，下单时后端需要
                            price: 6, // 价格（单位分）
                            s1: '110', // 规格类目 k_s 为 s1 的对应规格值 id
                            s2: '110', // 规格类目 k_s 为 s2 的对应规格值 id
                            s3: '110', // 最多包含3个规格值，为0表示不存在该规格
                            s4: '110',
                            stock_num: 110 // 当前 sku 组合对应的库存
                        },
                        {
                            id: 2259, // skuId，下单时后端需要
                            price: 136, // 价格（单位分）
                            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                            s2: '3026', // 规格类目 k_s 为 s2 的对应规格值 id
                            s3: '1964', // 最多包含3个规格值，为0表示不存在该规格
                            s4: '4964',
                            stock_num: 1 // 当前 sku 组合对应的库存
                        },{
                            id: 2259, // skuId，下单时后端需要
                            price: 90, // 价格（单位分）
                            s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
                            s2: '3026', // 规格类目 k_s 为 s2 的对应规格值 id
                            s3: '1964', // 最多包含3个规格值，为0表示不存在该规格
                            s4: '4963',
                            stock_num: 60 // 当前 sku 组合对应的库存
                        },{
                            id: 2259, // skuId，下单时后端需要
                            price: 78, // 价格（单位分）
                            s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
                            s2: '1960', // 规格类目 k_s 为 s2 的对应规格值 id
                            s3: '1964', // 最多包含3个规格值，为0表示不存在该规格
                            s4: '4964',
                            stock_num: 190 // 当前 sku 组合对应的库存
                        }
                    ]
                }
                </code>
            </pre>
            </div>
        </GeminiScrollbar>
        <p>tips: tree为全部可选规格，list为指定spec组成的sku信息</p>
        <h2 class="th2">change返回值</h2>
        <p style="margin-bottom: 10px">change的返回值为匹配的list加上固定几个参数，详情如下：</p>
        <div class="code">
            <pre>
                {
                    allRanking: ["1215", "1964", "3026", "4964"]
                    id: 2259
                    price: 136
                    s1: "1215"
                    s2: "3026"
                    s3: "1964"
                    s4: "4964"
                    specArray: [
                        {name: "颜色", val: "蓝色"}
                        {name: "尺码", val: "xl"}
                        {name: "性别", val: "女"}
                        {name: "用途", val: "一次性"}
                    ]
                    specString: "蓝色 xl 女 一次性 "
                    stock_num: 1
                }

            </pre>
        </div>
        <p style="margin-bottom: 10px">反选所触发的change返回值格式：</p>
        <div class="code">
            <pre>
                {
                    disable: false
                    id: "4964"
                    imgUrl: "https://img.yzcdn.cn/2.jpg"
                    name: "一次性"
                    selected: false
                }

            </pre>
        </div>
        <h2 class="th2">Attributes</h2>
        <el-table
                :data="Attributes"
                style="width: 100%">
            <el-table-column
                    prop="attrName"
                    label="参数"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="explain"
                    label="说明"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="attrType"
                    label="类型">
            </el-table-column>
            <el-table-column
                    prop="optional"
                    label="可选值">
            </el-table-column>
            <el-table-column
                    prop="defaultVal"
                    label="默认值">
            </el-table-column>
        </el-table>
        <h2 class="th2">Events</h2>
        <el-table
                :data="Events"
                style="width: 100%">
            <el-table-column
                    prop="eventName"
                    label="事件名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="explain"
                    label="说明"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="optional"
                    label="参数">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Attributes:[
                    {
                        attrName: 'fontColor',
                        explain: '未选中未失效状态下按钮文字颜色',
                        attrType: 'String',
                        optional: 'css所识别的颜色值，如:#000000,white,rgb(0,0,0)等',
                        defaultVal: '#333333'
                    },{
                        attrName: 'bgColor',
                        explain: '未选中未失效状态下按钮背景颜色',
                        attrType: 'String',
                        optional: 'css所识别的颜色值，如:#000000,white,rgb(0,0,0)等',
                        defaultVal: '#ffffff'
                    },{
                        attrName: 'selectedFontColor',
                        explain: '选中状态下按钮字体颜色',
                        attrType: 'String',
                        optional: 'css所识别的颜色值，如:#000000,white,rgb(0,0,0)等',
                        defaultVal: '#ffffff'
                    },{
                        attrName: 'selectedBgColor',
                        explain: '选中状态下按钮背景颜色',
                        attrType: 'String',
                        optional: 'css所识别的颜色值，如:#000000,white,rgb(0,0,0)等',
                        defaultVal: '#ffa025'
                    },{
                        attrName: 'disableFontColor',
                        explain: '失效状态下按钮字体颜色',
                        attrType: 'String',
                        optional: 'css所识别的颜色值，如:#000000,white,rgb(0,0,0)等',
                        defaultVal: '#dddddd'
                    },{
                        attrName: 'disableBgColor',
                        explain: '失效 状态下按钮背景颜色',
                        attrType: 'String',
                        optional: 'css所识别的颜色值，如:#000000,white,rgb(0,0,0)等',
                        defaultVal: '#ffffff'
                    },{
                        attrName: 'itemStyle',
                        explain: '每个选项的样式，请勿设置背景色及字体颜色，如有需要请按照上面属性修改。',
                        attrType: 'Object',
                        optional: '与v-bind:style格式相同',
                        defaultVal: '--'
                    }
                ],
                Events:[
                    {
                        eventName: 'change',
                        explain: '选中的参数可以组成可用sku后触发（每行至少选中一个）。每条反选都会触发此事件，返回数据为反选spec信息。',
                        optional: 'changeData（格式请自行操作控制台查看，或者查看上文change返回值）',
                     }
                ],
                sku:{
                    // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                    tree: [
                        {
                            k: '颜色', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '30349', // skuValueId：规格值 id
                                    name: '红色', // skuValueName：规格值名称
                                    imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                                    disable: false,
                                    selected: false
                                }, {
                                    id: '1215',
                                    name: '蓝色',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                },{
                                    id: '1217',
                                    name: '绿色',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                },{
                                    id: '110',
                                    name: '测试颜色',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                }
                            ],
                            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        },
                        {
                            k: '尺码', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '3026', // skuValueId：规格值 id
                                    name: 'xl', // skuValueName：规格值名称
                                    imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                                    disable: false,
                                    selected: false
                                },
                                {
                                    id: '1960',
                                    name: 'xxl',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                },{
                                    id: '110',
                                    name: '测试尺码',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                }
                            ],
                            k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        },
                        {
                            k: '性别', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '1963', // skuValueId：规格值 id
                                    name: '男', // skuValueName：规格值名称
                                    imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                                    disable: false,
                                    selected: false
                                },
                                {
                                    id: '1964',
                                    name: '女',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                },{
                                    id: '110',
                                    name: '测试性别',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                }
                            ],
                            k_s: 's3' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        },{
                            k: '用途', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '4963', // skuValueId：规格值 id
                                    name: '可复用', // skuValueName：规格值名称
                                    imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                                    disable: false,
                                    selected: false
                                },
                                {
                                    id: '4964',
                                    name: '一次性',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                },
                                {
                                    id: '110',
                                    name: '测试用途',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    disable: false,
                                    selected: false
                                }
                            ],
                            k_s: 's4' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        }
                    ],
                    // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                    list: [
                        {
                            id: 2259, // skuId，下单时后端需要
                            price: 6, // 价格（单位分）
                            s1: '110', // 规格类目 k_s 为 s1 的对应规格值 id
                            s2: '110', // 规格类目 k_s 为 s2 的对应规格值 id
                            s3: '110', // 最多包含3个规格值，为0表示不存在该规格
                            s4: '110',
                            stock_num: 110 // 当前 sku 组合对应的库存
                        },
                        {
                            id: 2259, // skuId，下单时后端需要
                            price: 136, // 价格（单位分）
                            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                            s2: '3026', // 规格类目 k_s 为 s2 的对应规格值 id
                            s3: '1964', // 最多包含3个规格值，为0表示不存在该规格
                            s4: '4964',
                            stock_num: 1 // 当前 sku 组合对应的库存
                        },{
                            id: 2259, // skuId，下单时后端需要
                            price: 90, // 价格（单位分）
                            s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
                            s2: '3026', // 规格类目 k_s 为 s2 的对应规格值 id
                            s3: '1964', // 最多包含3个规格值，为0表示不存在该规格
                            s4: '4963',
                            stock_num: 60 // 当前 sku 组合对应的库存
                        },{
                            id: 2259, // skuId，下单时后端需要
                            price: 78, // 价格（单位分）
                            s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
                            s2: '1960', // 规格类目 k_s 为 s2 的对应规格值 id
                            s3: '1964', // 最多包含3个规格值，为0表示不存在该规格
                            s4: '4964',
                            stock_num: 190 // 当前 sku 组合对应的库存
                        }
                    ]
                }
            }
        },
        methods:{
            skuChange(data){
                console.log(data)
            }
        }
    }
</script>

<style scoped>
    .phone{
        width: 300px;
        height: 400px;
        position: relative;
        border: solid 1px #333333;
        padding: 80px 5px;
        border-radius: 30px;
        background-color: #333333;

    }
    .phoneMain{
        width: 100%;
        height: 100%;
        background-color: white;
        padding: 10px;
        overflow: hidden;
        box-sizing: border-box;
    }
    .longCode{
        height: 500px;
        width: 100%;
        box-sizing: border-box;
    }
</style>