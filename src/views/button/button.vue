<template>
    <div>
        <h1 class="th1">按钮</h1>
        <p class="tp">本来不想造这种每家都有的轮子，但是原生button实在是太丑了……</p>
        <h2 class="th2">示例:</h2>
        <w-button>
            主要按钮
        </w-button>
        <h2 class="th2">失效按钮:</h2>
        <w-button disabled="disabled">
            失效按钮
        </w-button>
        <h2 class="th2">按钮尺寸:</h2>
        <w-button size="small">
            small
        </w-button>
        <w-button size="big" style="margin-top: 10px">
            big
        </w-button>
        <h2 class="th2">template:</h2>
        <div class="code" style="color: #666">
            <pre>
        &lt;w-button>
            主要按钮
        &lt;/w-button>
            </pre>
        </div>
        <p>tips: 可以接收原生button标签的全部属性和方法</p>
        <h2 class="th2">Attributes</h2>
        <el-table
                :data="Attributes"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="参数"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="说明"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
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
                    prop="date"
                    label="方法名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="说明"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="参数">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Attributes: [
                    {
                        date: 'type',
                        name: '按钮类型',
                        address: 'String',
                        optional: 'main',
                        defaultVal: 'main'
                    },{
                        date: 'size',
                        name: '按钮大小',
                        address: 'String',
                        optional: 'small big',
                        defaultVal: 'small'
                    },{
                        date: 'disabled',
                        name: '是否禁用',
                        address: 'Boolean',
                        optional: 'true false',
                        defaultVal: 'false'
                    }
                ],
                Events:[{
                    date: 'click',
                    name: '原生事件',
                    address: '--'

                }]
            }
        },
        methods:{
            buttonClick(){
                // 模拟网络请求
                setTimeout(()=>{
                    this.$refs.timeButton.next()
                },300)
            },
            disableClick(time){
                alert(`请${time}s后再次尝试`)
            }
        }
    }
</script>

<style scoped>
    pre{
        text-align: left;
    }
</style>