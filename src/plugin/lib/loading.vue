<template>
    <div class="loading">
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="{ enter: 50, leave: 300 }">
            <div class="bg" v-if="show" :style="{height:height,background:bg}" @touchmove.prevent="">
                <div class="box">
                    <img src="../../assets/logo.png">
                </div>
                <p :style="{color:textColor}">{{text}}</p>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'loading',
        mounted () {

        },
        props: {
            father: {},
            show: {
                type: Boolean,
                default: true
            },
            img: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: '加载中，请稍后'
            },
            textColor: {
                type: String,
                default: 'rgb(255,255,255)'
            },
            bg:{
                type: String,
                default: 'rgba(0,0,0,0.3)'
            },
            height: {
                type: String,
                default:'100%'
            }
        },
        methods: {
            notScroll (e) {
                e.preventDefault();
            }
        }
    }
</script>

<style scoped>
    .loading{
    }
    .bg{
        background: rgba(0,0,0,0.3);
        width: 100%;
        max-height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }
    .box{
        height: 80px;
        width: 80px;
        transform: rotate(0deg);
        animation: f 1.5s infinite;
        animation-direction: revert;
    }
    .box img{
        width: 100%;
        height: 100%;
    }
    @keyframes f {
        from {transform: rotate(0deg)}
        to {transform: rotate(360deg)}
    }
</style>
