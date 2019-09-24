<template>
    <div>
        <h1 class="th1">可拖动悬浮按钮</h1>
        <p class="tp">可在指定区域内拖动的悬浮按钮,可用于购物车等按钮，由于基于touch事件开发，<span class='warning'>pc上无法体验，请开启手机调试模式或者使用手机。</span></p>
        <h2 class="th2">示例:</h2>
        <div class="phone">
            <div class="phoneMain">
                <w-floatButton
                        :size="bSize"
                        :isFreeMove="bIsFreeMove"
                        :distanceToEdge = "bDistanceToEdge"
                        @click="bubbleClick">
                    <div class="iconBox">
                        slot
                    </div>
                </w-floatButton>
            </div>

        </div>
        <h2 class="th2">template:</h2>
        <div class="code" style="color: #666">
            <pre>
                &lt;w-floatButton
                        :size="bSize"
                        :isFreeMove="bIsFreeMove"
                        :distanceToEdge = "bDistanceToEdge"
                        @click="bubbleClick">
                    &lt;div class="iconBox">
                        slot
                    &lt;/div>
                &lt;/w-floatButton>
            </pre>
        </div>
        <h2 class="th2">js:</h2>
        <div class="code" style="color: #666">
            <pre>
                <code>
    export default {
        data() {
            return {
                bSize: 50,
                bIsFreeMove: false,
                bDistanceToEdge: 10
            }
        },
        methods:{
            bubbleClick(){
                alert('点击悬浮按钮')
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
                bSize: 50,
                bIsFreeMove: false,
                bDistanceToEdge: 10,
                Attributes:[
                    {
                        attrName: 'size',
                        explain: '按钮大小',
                        attrType: 'Number',
                        optional: '--',
                        defaultVal: 50
                    },{
                        attrName: 'isFreeMove',
                        explain: 'true 随意移动，最终停靠在移动后的位置；false 最终会靠边儿停靠',
                        attrType: 'Boolean',
                        optional: '--',
                        defaultVal: 'true'
                    },{
                        attrName: 'distanceToEdge',
                        explain: '距离边界的值',
                        attrType: 'Number',
                        optional: '--',
                        defaultVal: '0'
                    }
                ],
                Events:[
                    {
                        eventName: 'click',
                        explain: '原生事件',
                        optional: '--',
                    }
                ]
            }
        },
        methods:{
            bubbleClick(){
                alert('点击悬浮按钮')
            }
        }
    }
</script>

<style scoped>
    .phone{
        width: 300px;
        height: 400px;

        border: solid 1px #333333;
        padding: 80px 5px;
        border-radius: 30px;
        background-color: #333333;

    }
    .phoneMain{
        width: 100%;
        height: 100%;
        position: relative;
        background-color: white;
        padding: 10px;

        box-sizing: border-box;
    }
    .longCode{
        height: 500px;
        width: 100%;
        box-sizing: border-box;
    }
</style>