<template>
    <div>
        <h1 class="th1">Loading指令</h1>
        <p class="tp">加载数据等待期间，展示给用户。将想覆盖的标签写入v-wLoading即可,<span class="warning">v-loading值为true或者false</span></p>
        <h2 class="th2">示例:</h2>
        <div class="phone">
            <div class="phoneMain" v-wLoading="loadingFlag">
                我是背景
            </div>
        </div>
        <div style="margin-top: 10px">
            <button @click="loadingFlag=true">开启loading</button>
            <button @click="loadingFlag=false">结束loading</button>
        </div>
        <p class="bp">tips：要保证希望覆盖的节点设置过position，不然可能会超出容器</p>
        <h2 class="th2">template:</h2>
        <div class="code" style="color: #666">
            <pre>
                &lt;div v-wLoading="loadingFlag"&gt;
                    我是背景
                &lt;/div&gt;
            </pre>
        </div>
        <h2 class="th2">js:</h2>
        <div class="code" style="color: #666">
            <pre>
                <code>
    export default {
        data() {
            return {
                loadingFlag: false
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loadingFlag: false,
                Attributes:[
                    {
                        attrName: 'text',
                        explain: '文字提示内容',
                        attrType: 'String',
                        optional: '--',
                        defaultVal: '加载中，请稍后'
                    },{
                        attrName: 'textColor',
                        explain: '提示文字颜色',
                        attrType: 'String',
                        optional: 'css所识别的颜色值，如:#000000,white,rgb(0,0,0)等',
                        defaultVal: 'rgb(255,255,255)'
                    },{
                        attrName: 'bg',
                        explain: '选中状态下按钮字体颜色',
                        attrType: 'String',
                        optional: '背景色，建议使用rgba',
                        defaultVal: 'rgba(0,0,0,0.3)'
                    }
                ],
                Events:[
                    {
                        eventName: 'change',
                        explain: '选中的参数可以组成可用sku后触发（每行至少选中一个）。每条反选都会触发此事件，返回数据为反选spec信息。',
                        optional: 'changeData（格式请自行操作控制台查看，或者查看上文change返回值）',
                    }
                ]
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
        position: relative;
    }
    .longCode{
        height: 500px;
        width: 100%;
        box-sizing: border-box;
    }
</style>