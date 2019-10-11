<template>
    <button class="buttonBox available"
            :disabled="disabled"
            v-bind="$attrs"
            v-on="$listeners"
            :style="{backgroundColor:  !disabled ? bgColor : '', color: !disabled ? fColor : ''}"
            :class="{mainButton: !disabled&&type==='main',big: size==='big',small: size==='small',disableButton:disabled}">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "w-button",
        props:{
            size:{
                type: String,
                default: 'small'
            },
            bgColor:{
                type: String,
                default: ''
            },
            fColor:{
                type: String,
                default: ''
            },
            type:{
                type: String,
                default: 'main'
            },
            disabled: {
                default: false
            },
        },
        data(){
            return {
                disable: false,
                countDownNum: 60,
                nowColor: '',
                nowBg: ''
            }
        },
        mounted(){
            if(this.$attrs.hasOwnProperty('disabled')){
                this.disable = true
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .buttonBox{
        border-radius: .3rem;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        user-select:none;
        cursor: pointer;
        outline: none;
    }
    .mainButton{
        background-color: rgb(19,171,228);
        color: white;
        border: none;
    }
    .big{
        min-width: 95px;
        padding: 10px 20px;
        font-size: 14px;
    }
    .small{
        min-width: 75px;
        padding: 7px 14px;
        font-size: 12px;
    }
    .disableButton{
        border: none;
        background-color: rgb(221,221,221);
        color: #666;
    }
    .available:before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        user-select:none;
        left: 0;
        top: 0;

    }
    .available:hover:before{
        content: '';

    }
    .available:active:before{
    //background: transparent;
        content: '';
        opacity: 1;
        background: rgba(255,255,255,0.2);
    }
</style>