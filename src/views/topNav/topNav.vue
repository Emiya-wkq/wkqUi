<template>
    <div>
        <h1 class="th1">顶部导航</h1>
        <p class="tp">体验过其他家的此组件，发现都需要在父元素添加padding，才能占位，所以就自己造了个自动占位的轮子。</p>
        <h2 class="th2">示例:</h2>
        <div style="display: flex">
            <div class="phone" style="margin-right: 30px">
                <div class="phoneMain">
                    <w-topNav position="absolute" >
                        <p slot="left" style="padding-left: 10px;font-size: 14px;">&lt;</p>
                        <p slot="center" style="font-size: 14px;">导航</p>
                        <p slot="right" style="padding-right: 10px;font-size: 14px;">more</p>
                    </w-topNav>
                    <p>开启了占位</p>
                </div>

            </div>
            <div class="phone">
                <div class="phoneMain">
                    <w-topNav position="absolute" :placeholder="false">
                        <p slot="left" style="font-size: 14px;padding-left: 10px">&lt;</p>
                        <p slot="center" style="font-size: 14px;">导航</p>
                        <p slot="right" style="font-size: 14px;padding-right: 10px">more</p>
                    </w-topNav>
                    <p style="z-index: 12;position: relative">关闭占位</p>
                </div>

            </div>
        </div>

        <h2 class="th2">template:</h2>
        <div class="code" style="color: #666">
            <pre>

        &lt;w-topNav position="absolute" >
            &lt;p slot="left" style="padding-left: 10px">&lt;/p>
            &lt;p slot="center">导航&lt;/p>
            &lt;p slot="right" style="padding-right: 10px">more&lt;/p>
        &lt;/w-topNav>
            </pre>
        </div>
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
        <p class="bp" style="margin-top: 10px">tips: 开启占位请不要在外层设置padding,否则占位将会不准确</p>
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
                        date: 'background',
                        name: '背景色',
                        address: 'String',
                        optional: '色值',
                        defaultVal: 'rgb(19,171,228)'
                    },{
                        date: 'color',
                        name: '字体颜色',
                        address: 'String',
                        optional: '色值',
                        defaultVal: 'white'
                    },{
                        date: 'position',
                        name: '导航定位',
                        address: 'String',
                        optional: '推荐fixed与absolute',
                        defaultVal: 'fixed'
                    },{
                        date: 'borderBottom',
                        name: '下边框',
                        address: 'String',
                        optional: '--',
                        defaultVal: 'solid 1px #0E7CA7'
                    },{
                        date: 'height',
                        name: '高度',
                        address: 'String',
                        optional: '--',
                        defaultVal: '40px'
                    },{
                        date: 'placeholder',
                        name: '占位',
                        address: 'Boolean',
                        optional: 'true false',
                        defaultVal: 'true'
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
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
    }
</style>