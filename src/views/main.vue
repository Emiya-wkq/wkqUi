<template>
    <div class="homeBox">
        <GeminiScrollbar class="leftNav">
            <el-menu
                    :default-active="$route.path"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-menu-item-group>
                        <template slot="title">开始</template>
                        <el-menu-item index="/home" @click="jump('/home')">说明</el-menu-item>
                        <el-menu-item index="/use" @click="jump('/use')">安装与使用</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">字体图标</template>
                        <el-menu-item index="/iconFont" @click="jump('/iconFont')">icon</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">实例方法</template>
                        <el-menu-item index="/bus" @click="jump('/bus')">bus</el-menu-item>
                        <el-menu-item index="/isWeChat" @click="jump('/isWeChat')">是否微信环境</el-menu-item>
                        <el-menu-item index="/confirm" @click="jump('/confirm')">确认框</el-menu-item>
                        <el-menu-item index="/toast" @click="jump('/toast')">轻提示</el-menu-item>
                        <el-menu-item index="/copyText" @click="jump('/copyText')">拷贝文字</el-menu-item>
                        <el-menu-item index="/creatPhoto" @click="jump('/createPhoto')">截图(未完善)</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="UI组件">
                        <el-menu-item index="/button" @click="jump('/button')">按钮</el-menu-item>
                        <el-menu-item index="/input" @click="jump('/input')">输入框</el-menu-item>
                        <el-menu-item index="/topNav" @click="jump('/topNav')">顶部导航</el-menu-item>
                        <el-menu-item index="/countButton" @click="jump('/countButton')">倒计时按钮</el-menu-item>
                        <el-menu-item index="/sku" @click="jump('/sku')">sku选择器</el-menu-item>
                        <el-menu-item index="/floatButton" @click="jump('/floatButton')">悬浮按钮</el-menu-item>
                        <el-menu-item index="/tab" @click="jump('/tab')">Tab选项卡</el-menu-item>
                        <el-menu-item index="/upload" @click="jump('/upload')">上传图片</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="自定义指令">
                        <el-menu-item index="/loading" @click="jump('/loading')">loading</el-menu-item>
                        <el-menu-item index="/imgLoad" @click="jump('/imgLoad')">图片检测(未完成)</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="过滤器">
                        <el-menu-item index="/priceFilter" @click="jump('/priceFilter')">价格过滤器</el-menu-item>
                    </el-menu-item-group>
            </el-menu>
        </GeminiScrollbar>
        <div class="routerBox" >
            <router-view style="  padding-bottom: 40px;"></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods:{
            jump(url){
                this.$router.push(url)
            },
            handleOpen(){

            },
            handleClose(){

            }
        }
    }
</script>

<style scoped lang="less">
    .homeBox{
        width: 1080px;
        margin: auto;
        display: flex;
        justify-content: space-between;

    }
    .el-menu-vertical-demo{
        border-right: none;
    }
    .leftNav{
        width: 270px;
        margin-right: 15px;
        height: calc(100vh - 90px);
        background-color: white;
        margin-top: 90px;
        position: fixed;
        top: 0;
        bottom:0
    }
    .explain{
        font-weight: 600;
        margin: 20px 0 20px 20px;
        cursor: pointer;
    }
    .routerBox{
        height: calc(100vh - 90px);
        flex-grow: 1;
        width: 0;
        padding-left: 280px;
        margin-top: 80px;
    }
</style>