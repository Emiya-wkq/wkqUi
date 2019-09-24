<template>
    <div>
        <h1 class="th1">价格过滤器</h1>
        <p class="tp">实际项目中有不同组件间互相调用方法的需求，父调子是很简单的，靠着便利的ref注册下就可以实现，但兄弟组件或者子调用父的，还是bus来得轻松。</p>
        <h2 class="th2">示例:</h2>
        <p class="bp">
            默认过滤：<span class="code">{{60 | price}}</span>
        </p>
        <p class="bp">
            保留0位小数：<span class="code">{{60 | price('￥', 0)}}</span>
        </p>
        <p class="bp">
            保留一位小数：<span class="code">{{60 | price('￥', 1)}}</span>
        </p>
        <p class="bp">
            美元：<span class="code">{{60 | price('$', 2)}}</span>
        </p>
        <h2 class="th2">template:</h2>
        <div class="code" style="color: #666">
            <pre v-pre>

         &lt;p class="bp"&gt;
            默认过滤： &lt;span class="code">{{60 | price}} &lt;/span&gt;
         &lt;/p&gt;
         &lt;p class="bp"&gt;
            保留0位小数： &lt;span class="code">{{60 | price('￥', 0)}} &lt;/span&gt;
         &lt;/p&gt;
         &lt;p class="bp"&gt;
            保留一位小数： &lt;span class="code">{{60 | price('￥', 1)}} &lt;/span&gt;
         &lt;/p&gt;
         &lt;p class="bp"&gt;
            美元： &lt;span class="code">{{60 | price('$', 2)}} &lt;/span&gt;
         &lt;/p&gt;
            </pre>
        </div>
        <p class="bp">
            tips：如果出现小数位数被截取部分不为0，并不会四舍五入等操作，而是直接舍去多余部分
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>