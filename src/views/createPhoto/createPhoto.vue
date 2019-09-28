<template>
    <div>
        <div class="imageWrapper" ref="imageWrapper">
            <img class="real_pic" :src="dataURL" />
            666
            <slot></slot>
        </div>
        <button @click="toImage">create</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dataURL: ''
            }
        },
        methods: {
            toImage() {
                this.$wCreatePhoto(this.$refs.imageWrapper).then(res=>{
                    this.dataURL = res
                })
            }
        }
    }
</script>

<style scoped>

</style>