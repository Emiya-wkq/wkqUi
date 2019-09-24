<template>
    <div>
        <h1 class="th1">确认框</h1>
        <p class="tp">通过vue实例进行调用的确认框，实际项目中使用起来更为方便。</p>
        <h2 class="th2">示例:</h2>
        <button @click="confirm" style="padding: 2px 10px"> 点击弹出确认 </button>
        <h2 class="th2">template:</h2>
        <div class="code" style="color: #666">
            <pre>

        &lt;button @click="confirm"&gt; 确认 &lt;/button&gt;
            </pre>
        </div>
        <h2 class="th2">js:</h2>
        <div class="code" style="color: #666">
            <pre>
                <code>
    export default {
        data() {
            return {

            }
        },
        methods:{
            confirm(){
                this.$wConfirm({
                    title: '消息',
                    message: '你干啥？',
                    cancel(){
                        alert('没啥，点错了')
                    },
                    confirm(){
                        alert('就是要点你')
                    }
                })
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Attributes:[
                    {
                        attrName: 'title',
                        explain: '确认框标题',
                        attrType: 'String',
                        optional: '--',
                        defaultVal: '确认'
                    },{
                        attrName: 'message',
                        explain: '提示内容',
                        attrType: 'String',
                        optional: '--',
                        defaultVal: '确认这样做吗？'
                    },{
                        attrName: 'cancel',
                        explain: '取消回调',
                        attrType: 'Function',
                        optional: '--',
                        defaultVal: '--'
                    },{
                        attrName: 'confirm',
                        explain: '确认回调',
                        attrType: 'Function',
                        optional: '--',
                        defaultVal: '--'
                    }
                ]
            }
        },
        methods:{
            confirm(){
                this.$wConfirm({
                    title: '消息',
                    message: '你干啥？',
                    cancel(){
                        alert('没啥，点错了')
                    },
                    confirm(){
                        alert('就是要点你')
                    }
                })
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