<template>
    <div>
        <h1 class="th1">Toast</h1>
        <p class="tp">轻提示，方便的对用户操作进行反馈。</p>
        <h2 class="th2">示例:</h2>
        <button @click="defClick" style="padding: 2px 10px"> 默认Toast </button>
        <br/>
        <input v-model="time" placeholder="设置toast存续时间" style="margin: 10px 10px 0 0;padding: 2px 10px"/>
        <button @click="setClick" style="padding: 2px 10px"> 指定参数Toast </button>
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
                time: ''
            }
        },
        methods:{
            defClick(){
                this.$wToast('此信息五秒后消失')
            },
            setClick () {
                this.$wToast({
                    content: `此消息${this.time}s后消失`,
                    time: this.time
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
                time: '',
                Attributes:[
                    {
                        attrName: 'content',
                        explain: '提示内容',
                        attrType: 'String',
                        optional: '--',
                        defaultVal: '--'
                    },{
                        attrName: 'time',
                        explain: '存在时间，单位为s',
                        attrType: 'String',
                        optional: '--',
                        defaultVal: '5'
                    }
                ]
            }
        },
        mounted(){

        },
        methods:{
            defClick(){
                this.$wToast('此信息五秒后消失')
            },
            setClick () {
                this.$wToast({
                    content: `此消息${this.time?this.time:5}s后消失`,
                    time: this.time
                })
            },
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