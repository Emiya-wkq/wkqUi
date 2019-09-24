<template>
    <div class="timeButtonBox"
         :class="{disable: timeShow, available: !timeShow}"
         :style="{color:nowColor,backgroundColor:nowBg,border:` solid 1px ${nowBg}`}" @click="send">
        <div v-if="!timeShow" >
            获取
        </div>
        <div v-else>
            {{countDownNum}}s后重发
        </div>
    </div>
</template>

<script>
  export default {
    name: "tab",
    props:{
      time:{
        type: Number,
        default: 60
      },
      availableBgColor:{
            type: String,
            default: '#ff4444'
      },
      availableColor:{
        type: String,
        default: '#ffffff'
      },
      disableBgColor:{
        type: String,
        default: '#dddddd'
      },
      disableColor:{
        type: String,
        default: '#ffffff'
      }
    },
    data(){
      return {
        timeShow: false,
        countDownNum: 60,
        nowColor: '',
        nowBg: ''
      }
    },
    created(){
        this.nowBg = this.availableBgColor
        this.nowColor = this.availableColor
    },
    methods:{
        send(){
            if (this.timeShow) {
                this.$emit('disableClick', this.countDownNum)
            } else {
                this.$emit('send')
            }
        },
        next(){
            this.nowBg = this.disableBgColor
            this.nowColor = this.disableColor
            this.timeShow = true
            this.countDownNum = this.time - 1
            this.countDown()
        },
        countDown(){
            setTimeout(()=>{
                this.countDownNum -= 1
                if(this.countDownNum>=1){
                  this.countDown()
                } else {
                  this.timeShow =false
                    this.nowBg = this.availableBgColor
                    this.nowColor = this.availableColor
                }
            },1000)
        }
    }
  }
</script>

<style scoped>
    .timeButtonBox{
        width: auto;
        height: 30px;
        border-radius: .3rem;
        padding: 0 .5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        user-select:none;
        cursor: pointer;
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