<template>
    <div>
        <h1 class="th1">倒计时按钮</h1>
        <p class="tp">最常见的就是应用于发完短信，然后倒计时等待的场景。</p>
        <h2 class="th2">示例:</h2>
        <w-timeButton :time="5" @send="buttonClick" @disableClick="disableClick" ref="timeButton" style="width: 100px">

        </w-timeButton>
        <h2 class="th2">template:</h2>
        <div class="code" style="color: #666">
            <pre>
                &lt;w-timeButton
                :time="5"
                @send="buttonClick"
                @disableClick="disableClick"
                ref="timeButton"
                style="width: 100px"&gt;
                &lt;/w-timeButton&gt;
            </pre>
        </div>
        <h2 class="th2">js:</h2>
        <div class="code" style="color: #666">
            <pre>
                <code>
                    export default {
                        data() {
                            return {}
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
                </code>
            </pre>
        </div>
        <p>tips: 需要通过ref来注册组件，点击后如果想开始倒计时需要调用组件上的next方法</p>
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
                        date: 'time',
                        name: '总的倒计时时间',
                        address: 'Number',
                        optional: '--',
                        defaultVal: '60'
                    },{
                        date: 'availableBgColor',
                        name: '可点击状态下的背景颜色',
                        address: 'String',
                        optional: '--',
                        defaultVal: '#ff4444'
                    },{
                        date: 'availableColor',
                        name: '可点击状态下字体颜色',
                        address: 'String',
                        optional: '--',
                        defaultVal: '#ffffff'
                    },{
                        date: 'disableBgColor',
                        name: '不可点击状态下的背景颜色',
                        address: 'String',
                        optional: '--',
                        defaultVal: '#dddddd'
                    },{
                        date: 'disableColor',
                        name: '不可点击状态下字体颜色',
                        address: 'String',
                        optional: '--',
                        defaultVal: '#ffffff'
                    }
                ],
                Events:[{
                    date: 'send',
                    name: '用户点击按钮后触发的事件',
                    address: '--'

                },{
                    date: 'disableClick',
                    name: '用户点击无效状态下按钮触发的事件',
                    address: 'time (当前倒计时秒数)'
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