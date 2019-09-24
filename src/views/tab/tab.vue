<template>
    <div>
        <h1 class="th1">Tab选项卡</h1>
        <p class="tp">tab选项卡，无论是pc还是移动端都是不陌生的，不多解释</p>
        <h2 class="th2">示例:</h2>
        <div class="phone">
            <div class="phoneMain">
                <w-tab style="z-index: 1" :tabData="tabData" @tabChange="tabChange" :defaultTab="defaultTab" label="name"></w-tab>
            </div>
        </div>
        <h2 class="th2">template:</h2>
        <div class="code" style="color: #666">
            <pre>
                &lt;w-tab
                       :tabData="tabData"
                       @tabChange="tabChange"
                       label="name"
                       :defaultTab="defaultTab"&gt;

                &lt;/w-tab&gt;
            </pre>
        </div>
        <h2 class="th2">js:</h2>
        <div class="code" style="color: #666">
            <pre>
                <code>
    export default {
        data() {
            return {
                // 根据此参数展示初始tab
                defaultTab: {
                    name: '待发货',
                    no: 2
                },
                tabData:[
                    {
                        name: '待支付',
                        no: 0
                    },{
                        name: '待发货',
                        no: 2
                    },{
                        name: '待收货',
                        no: 3
                    },{
                        name: '已完成',
                        no: 4
                    }
                ]
            }
        },
        methods:{
            tabChange(item){
                console.log(item)
            }
        }
    }
                </code>
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
                // 根据此参数展示初始tab
                defaultTab: {
                    name: '待发货',
                    no: 2
                },
                tabData:[
                    {
                        name: '待支付',
                        no: 0
                    },{
                        name: '待发货',
                        no: 2
                    },{
                        name: '待收货',
                        no: 3
                    },{
                        name: '已完成',
                        no: 4
                    }
                ],
                Attributes:[
                    {
                        attrName: 'tabData',
                        explain: 'tab选项卡数据',
                        attrType: 'Array',
                        optional: '参考例子中的格式',
                        defaultVal: '--'
                    },{
                        attrName: 'label',
                        explain: 'tab选项卡每项的名字，将会选择每条对象中的此字段',
                        attrType: 'String',
                        optional: '--',
                        defaultVal: 'name'
                    },{
                        attrName: 'selectedColor',
                        explain: '选中状态下按钮字体和滑块颜色',
                        attrType: 'String',
                        optional: 'css所识别的颜色值，如:#000000,white,rgb(0,0,0)等',
                        defaultVal: 'red'
                    },{
                        attrName: 'color',
                        explain: '选中状态下字体颜色',
                        attrType: 'String',
                        optional: 'css所识别的颜色值，如:#000000,white,rgb(0,0,0)等',
                        defaultVal: '#666666'
                    },{
                        attrName: 'sliderWidth',
                        explain: '滑块宽度所占每条选项的百分比',
                        attrType: 'String',
                        optional: '百分比',
                        defaultVal: '70%'
                    },{
                        attrName: 'transition',
                        explain: '滑块是否开启过渡效果',
                        attrType: 'Boolean',
                        optional: 'true，false',
                        defaultVal: 'true'
                    },{
                        attrName: 'defaultTab',
                        explain: '默认选中的选项，需要完全和tabData中的某一项匹配',
                        attrType: '--',
                        optional: '--',
                        defaultVal: '--'
                    }
                ],
                Events:[
                    {
                        eventName: 'tabChange',
                        explain: '选项卡发生变化触发，初始化的时候不会触发',
                        optional: '所点击的tabData全部数据',
                    }
                ]
            }
        },
        methods:{
            tabChange(item){
                console.log(item)
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