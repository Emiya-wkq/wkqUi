
<template>
    <div style="position: absolute">
        <div>
            <h1 class="th1">图片生成</h1>
            <p class="tp">将dom节点转换为图片，基于html2canvas</p>

            <h2 class="th2" >示例:</h2>
        </div>

        <div style="display: flex">
            <div ref="imageWrapper">
                <div>
                    <div class="phone" >
                        <div class="phoneMain">
                            <w-button @click="toImage" style="margin: 10px auto">点击生成图片</w-button>
                            <p>注意：页面出现滚动条将导致图片绘制出现偏差，如体验需<span style="color:red; cursor: pointer" @click="hidden">隐藏/显示文档</span>后再试</p>
                        </div>
                    </div>
                </div>
            </div>
            <img style="margin-left: 30px" :src="dataURL"/>
        </div>
        <div v-if="flag">
            <h2 class="th2">template:</h2>
            <div class="code" style="color: #666">
            <pre>
    &lt;div ref="imageWrapper">

    &lt;/div>
            </pre>
            </div>
            <h2 class="th2">js:</h2>
            <div class="code" style="color: #666">
            <pre>
    export default {
        data() {
            return {
                flag: true,
                dataURL: ''
            }
        },
        methods: {
            toImage() {
                this.$wCreatePhoto(this.$refs.imageWrapper).then(res=>{
                    this.dataURL = res
                })
            },
            hidden() {
                this.flag = !this.flag
            }
        }
    }
            </pre>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                flag: true,
                dataURL: ''
            }
        },
        methods: {
            toImage() {
                this.$wCreatePhoto(this.$refs.imageWrapper).then(res=>{
                    this.dataURL = res
                })
            },
            hidden() {
                this.flag = !this.flag
            }
        }
    }
</script>

<style scoped>
    pre {
        text-align: left;
    }

    .phone {
        width: 230px;
        height: 430px;
        position: relative;
        display: flex;
        border: solid 1px #333333;
        box-sizing: border-box;
        border-radius: 20px;
        background-color: #333333;

    }

    .phoneMain {
        margin: 50px 5px;
        padding: 5px;
        width: 100%;
        background-color: white;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
    }
</style>