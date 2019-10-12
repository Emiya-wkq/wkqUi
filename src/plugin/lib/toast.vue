<template>
    <transition>
        <p v-if="show" class="toast" :style="styleList">{{content}}</p>
    </transition>
</template>

<script>
    export default {
        props:{
          show:{
             type: Boolean,
             default: false
          },
          content: {
              type: String
          },
          time:{
              type: Number,
              default: 5
          },
          styleList:{
              type: Object
          }
        },
        methods:{
            init(){
                setTimeout(()=>{
                    this.show = false
                },this.time*1000)
            }
        }
    }
</script>

<style scoped>
    .toast{
        position: fixed;
        padding: 10px 20px;
        border-radius: 10px;
        color: white;
        background-color: rgba(0,0,0,0.3);
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        word-break:break-word;
        z-index: 10;
        max-width: 70%;
    }
</style>