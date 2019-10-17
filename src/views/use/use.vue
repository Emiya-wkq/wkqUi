<template>
    <div>
        <h1 class="th1">安装与使用</h1>
        <p class="tp">使用npm安装此包，然后项目中进行注册后使用(当前不支持按需，下个大版本增加按需引入)</p>
        <h2 class="th2">npm安装</h2>
        <p class="code">
            npm i vue-wkq-ui -S
        </p>
        <h2 class="th2">main.js中</h2>
            <pre class="code">

        import wkqUi from 'vue-wkq-ui'
        Vue.use(wkqUi)
        import 'vue-wkq-ui/lib/wkqUi.css'
            </pre>
        <h2 class="th2">文中的this均代表vue实例</h2>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>
    h2{
        margin-top: 60px;
    }
</style>