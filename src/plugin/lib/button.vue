<template>
    <button class="buttonBox available" :disabled="disabled" v-bind="$attrs" :class="{mainButton: !disabled&&true,big: size==='big',disableButton:disabled}">
        这是个按钮
    </button>
</template>

<script>
    export default {
        name: "tab",
        props:{
            size:{
                type: String,
                default: 'big'
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
        width: auto;
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
        padding: 10px 20px;
        font-size: 14px;
    }
    .disableButton{

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