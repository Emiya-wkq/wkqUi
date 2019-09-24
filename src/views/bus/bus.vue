<template>
    <div>
        <h1 class="th1">BUS 数据方法中转</h1>
        <p class="tp">实际项目中有不同组件间互相调用方法的需求，父调子是很简单的，靠着便利的ref注册下就可以实现，但兄弟组件或者子调用父的，还是bus来得轻松。</p>
        <h2 class="th2">使用方法:</h2>
        <p class="bp">
            发起事件的组件：<span class="code">this.$bus.$emit('方法名', 参数)</span>
        </p>
        <p class="bp">
            被触发的组件：<span class="code">created() {<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.$bus.$on('方法名', (参数) =&gt; {  //获取传递的参数并进行操作
          })<br/>
        }</span>
        </p>
        <p class="tp"> tips:被触发的组件需要在生命周期中进行事件绑定，可是mounted也可是created 等 </p>
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

</style>