<template>
    <div>
        <w-popup v-model="popupShow">
        </w-popup>
        <w-popup v-model="customPopupShow">
            <div slot="header" style="display: flex;padding: 5px">
                <img src="../../assets/logo.png" style="width: 15px;height: 15px"/>
                <p>vue</p>
            </div>
            <div slot="main">
                <w-input placeholder="请输入信息"
                         style="width: 100%; margin: .3rem 0">
                    <p>v</p>
                </w-input>
                <w-input v-model="text" placeholder="请输入信息"
                         style="width: 100%; margin: .3rem 0">
                    <p>u</p>
                </w-input>
                <w-input v-model="text" placeholder="请输入信息"
                         style="width: 100%; margin: .3rem 0">
                    <p>e</p>
                </w-input>
            </div>
            <div slot="footer">
                <div style="padding: 5px">
                    <w-button @click="confirm" style="width: 100%">自定义footer</w-button>
                </div>

            </div>
        </w-popup>
        <h1 class="th1">弹出框</h1>
        <p class="tp">模拟系统模态窗，可进行确认操作，进一步完成填充信息等。</p>
        <h2 class="th2">示例1:</h2>
        <w-button @click="popupShow = true" > 点击弹出模态窗（默认内容） </w-button>

        <h2 class="th2">template:</h2>
        <div class="code" style="color: #666">
            <pre>

    &lt;w-popup v-model="popupShow">
    &lt;/w-popup>
    &lt;w-button @click="popupShow = true" > 点击弹出模态窗（默认内容）  &lt;/w-button>
            </pre>
        </div>
        <h2 class="th2">js:</h2>
        <div class="code" style="color: #666">
            <pre>
                <code>
    export default {
        data() {
            return {
                popupShow: false
            }
        }
    }
                </code>
            </pre>
        </div>
        <h2 class="th2">示例2:</h2>
        <w-button @click="customPopupShow = true" > 点击弹出模态窗（自定义slot） </w-button>

        <h2 class="th2">template:</h2>
        <div class="code" style="color: #666">
            <pre>

    &lt;w-popup v-model="customPopupShow">
    &lt;/w-popup>
    &lt;w-button @click="customPopupShow = true" > 点击弹出模态窗（自定义slot）  &lt;/w-button>
            </pre>
        </div>
        <h2 class="th2">js:</h2>
        <div class="code" style="color: #666">
            <pre>
                <code>
    export default {
        data() {
            return {
                customPopupShow: false
            }
        }
    }
                </code>
            </pre>
        </div>
        <h2 class="th2">Options</h2>
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
        <h2 class="th2">Slots</h2>
        <el-table
                :data="slots"
                style="width: 100%">
            <el-table-column
                    prop="attrName"
                    label="插槽名">
            </el-table-column>
            <el-table-column
                    prop="explain"
                    label="说明">
            </el-table-column>
        </el-table>
        <h2 class="th2">Events</h2>
        <el-table
                :data="events"
                style="width: 100%">
            <el-table-column
                    prop="attrName"
                    label="事件名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="explain"
                    label="说明"
                    width="280">
            </el-table-column>
            <el-table-column
                    prop="attrType"
                    label="参数">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                popupShow: false,
                customPopupShow: false,
                Attributes:[
                    {
                        attrName: 'title',
                        explain: '标题，如有对应slot请勿设置',
                        attrType: 'String',
                        optional: '--',
                        defaultVal: '确认操作'
                    },{
                        attrName: 'zIndex',
                        explain: '背景层级',
                        attrType: 'Number',
                        optional: '--',
                        defaultVal: '10'
                    },{
                        attrName: 'v-model',
                        explain: '控制模态窗显示隐藏',
                        attrType: 'Boolean',
                        optional: 'true false',
                        defaultVal: 'false'
                    }
                ],
                events:[
                    {
                        attrName: 'bgClose',
                        explain: '点击背景关闭窗口触发事件',
                        attrType: '--'
                    },{
                        attrName: 'cancel',
                        explain: '点击取消按钮，如设置footer插槽此项无效',
                        attrType: '--'
                    },{
                        attrName: 'confirm',
                        explain: '点击确认按钮，如设置footer插槽此项无效',
                        attrType: '--'
                    }
                ],
                slots:[
                    {
                        attrName: 'header',
                        explain: '头部插槽，使用后title无效'
                    },{
                        attrName: 'main',
                        explain: '内容插槽'
                    },{
                        attrName: 'footer',
                        explain: '底部插槽，使用后相关事件无效'
                    }
                ]
            }
        },
        methods:{
            confirm(){
                this.popupShow = true
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