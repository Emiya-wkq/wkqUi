<template>
    <div>
        <div style="display: flex">
            <div class="inputBox">
                <label class="label" v-if="labelShow">
                    <slot></slot>
                </label>
                <input class="input"
                       :type="type"
                       @input="handleInput"
                       v-bind="$attrs"
                       @focus="handleFocus"
                       @blur="handleBlur"
                       @change="handleChange"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'w-input',
        computed:{
            currentValue:function () {
                return this.value
            }
        },
        props:{
            value: {
                default: ''
            },
            size:{
                type: String,
                default: 'small'
            },
            type:{
                type: String,
                default: 'text'
            },
            labelShow:{
                type: Boolean,
                default: true
            },
            disabled: {
                default: false
            },
        },
        data() {
            return {}
        },
        methods:{
            handleInput(event) {
                if(event.target.value){
                    let value = event.target.value;
                    this.$emit('input', value); //触发 input 事件，并传入新值
                }
            },
            handleBlur(event) {
                this.$emit('blur', event);
            },
            handleFocus(event) {
                this.$emit('focus', event);
            },
            handleChange(event) {
                this.$emit('change', event.target.value);
            }
        }
    }
</script>

<style scoped>
    .inputBox{
        display: flex;
        background-color: #ededed;
        width: 100%;
        padding: 3px;
        position: relative;
        border-radius: 3px;
    }
    .label {
        min-width: 30px;
        height: 100%;
        border-right: solid 1px #fcfcfc;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .input{
        background: none;
        border:none;
        outline: none;
        height: 26px;
        width: 100%;
        padding: 0 8px;
    }
    .input::-webkit-input-placeholder{
        color: rgb(207, 207, 207);
    }
</style>