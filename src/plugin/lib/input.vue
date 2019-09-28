<template>
    <div>
        <div style="display: flex">
            <div class="inputBox">
                <label class="label">
                    <slot name="label"></slot>
                </label>
                <input class="input" :type="type"  v-bind="$attrs" v-on="$listeners"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            size:{
                type: String,
                default: 'small'
            },
            type:{
                type: String,
                default: 'text'
            },
            disabled: {
                default: false
            },
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .inputBox{
        display: flex;
        background-color: #ededed;
        padding: 3px;
        position: relative;
        border-radius: 3px;
    }
    .label {
        width: 30px;
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
        padding: 0 8px;
    }
    .input::-webkit-input-placeholder{
        color: rgb(207, 207, 207);
    }
</style>