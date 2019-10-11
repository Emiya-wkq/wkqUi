<template>
  <transition name="fade" mode="out-in">
    <div class="confirmBg" v-if="visible" @click="visible = false">
      <div class="windowBox" @click.stop="">
        <div class="title">{{title}}</div>
        <div class="tips">{{message}}</div>
        <div class="bottom">
            <div class="ok" @click="ok">确定</div>
            <div class="no" @click="no">取消</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'index',
    props:{
      title: {
        type: String,
        default: '确认'
      },
      message: {
        type: String,
        default: '确认这样做吗？'
      },
      visible: {
        type: Boolean,
        default: false
      },
      confirm: {
        type: Function
      },
      noConfirm: {
        type: Function
      },
      element: {
        type:Object
      }
    },
    methods:{
      ok () {
        this.visible = false
        if(this.confirm){
          this.confirm()
        }
      },
      no () {
        this.visible = false
        if(this.noConfirm){
          this.noConfirm()
        }
      }
    }
  }
</script>

<style scoped>
  .confirmBg{
    background: rgba(0,0,0,.3);
    position: fixed;
    z-index: 9999;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .windowBox {
    width:300px;
    min-height:130px ;
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: space-between;
    border-radius: 5px;
    padding: 5px;
  }
  .title {
    box-sizing: border-box;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    width: 100%;
    border-bottom: solid 1px #eee;
    font-size: 12px;
  }
  .tips {
    padding: 0 10px;
    font-size: 12px;
  }
  .bottom {
    padding: 5px 10px;
    display: flex;
    flex-direction: row-reverse;
  }
  .bottom>div{
    border-radius: 6px;
  }
  .ok {
    text-align: center;
    padding: 5px 15px;
    background: rgb(19,171,228);
    color: white;
    font-size: 12px;
    border-radius: 6px;
  }
  .no {
    padding: 5px 15px;
    text-align: center;
    background: #ddd;
    font-size: 12px;
    margin-right: 6px;
  }
</style>
