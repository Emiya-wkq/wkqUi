<template>
    <div>
        <h1 class="th1">文本复制</h1>
        <p class="tp">用于复制分享码，用户名称等场景</p>
        <h2 class="th2">使用方法:</h2>
        <div class="code" style="color: #666;font-weight: 600">
            this.$wCopy('要复制的文本')
        </div>
        <h2 class="th2">示例:</h2>
        <div class="phone">
            <div class="phoneMain">
                <p><label>请输入要拷贝的文字: <input v-model="text"/></label></p>

                <p style="margin-top: 10px"><button @click="copy">点击后粘贴查看</button></p>
            </div>

        </div>
        <h2 class="th2">template:</h2>
        <div class="code" style="color: #666">
            <pre>

        &lt;label>请输入要拷贝的文字: &lt;input v-model="text"/>&lt;/label>
        &lt;button @click="copy">copy后粘贴查看&lt;/button>
            </pre>
        </div>
        <h2 class="th2">js:</h2>
        <div class="code" style="color: #666">
            <pre>
                <code>
    export default {
        data() {
            return {
                text: ''
            }
        },
        methods:{
            copy(){
                this.$wCopy(this.text)
            }
        }
    }
                </code>
            </pre>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: ''
            }
        },
        methods:{
            copy(){
                this.$wCopy(this.text)
                this.$wToast('已复制到剪切板')
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