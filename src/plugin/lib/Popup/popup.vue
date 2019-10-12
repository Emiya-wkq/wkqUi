<template>
    <div class="popupBox" v-if="value" @click="bgClose" :style="{zIndex: zIndex}">
        <div class="popupMain" @click.stop="">
            <header>
                <slot name="header">
                    <div class="title">
                        <p>{{title}}</p>
                    </div>
                </slot>
            </header>
            <main style="padding: 5px 10px">
                <slot name="main">
                    <w-input v-model="text" :labelShow="false" placeholder="请输入信息以继续" style="width: 100%; margin: .3rem 0" ></w-input>
                </slot>
            </main>
            <footer>
                <slot name="footer">
                    <div class="footer">
                        <w-button :labelShow="false" placeholder="请输入信息" style="width: 49%;" @click="confirm">确认</w-button>
                        <w-button :labelShow="false" bg-color="#ddd" placeholder="请输入信息" style="width: 49%;" @click="cancel">取消</w-button>
                    </div>

                </slot>
            </footer>


        </div>
    </div>
</template>

<script>
    export default {
        name: 'w-popup',
        props:{
            value: {
                default: false
            },
            zIndex:{
                type: Number,
                default: 10
            },
            title:{
                type: String,
                default: '确认操作'
            },
        },
        data() {
            return {
                text: '',
            }
        },
        methods:{
            bgClose(){
              this.$emit('bgClose')
              this.close()
            },
            cancel(){
              this.$emit('cancel')
              this.close()
            },
            confirm(){
              this.$emit('confirm')
            },
            close(){
                this.$emit('input',false)
            }
        }
    }
</script>

<style scoped>
    .popupBox{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 10;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .popupMain{
        width: 300px;
        background-color: white;
        border-radius: .2rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .title{
        font-size: 14px;
        padding: 0 5px;

    }
    .title>p{
        border-bottom: solid 1px #eee;
        padding: 7px 5px;
        color: #5e5e5e;
    }
    .footer{
        display: flex;
        padding: 5px;
        justify-content: space-between;
    }
</style>