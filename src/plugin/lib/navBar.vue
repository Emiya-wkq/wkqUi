<template>
    <div class="box" :style="{minHeight:placeholder? height: ''}">
        <ul class="top" :style="{'color': color,'height':height,'background':background,'borderBottom':borderBottom,'position':position}">
            <li class="left">
                <slot name="left"></slot>
            </li>
            <li class="center">
                <slot name="center"></slot>
            </li>
            <li class="right">
                <slot name="right"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'navBar',
    data(){
      return{

      }
    },
    props: {
      background: {
        type: String,
        default: 'rgb(19,171,228)'
      },
      color:{
        type: String,
        default: 'white'
      },
      placeholder:{
        type: Boolean,
        default: true
      },
      position: {
        type: String,
        default: 'fixed'
      },
      borderBottom: {
        type: String,
        default: 'solid 1px #0E7CA7'
      },
      height: {
        type: String,
        default: '40px'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box{

    }
    .top {
        position: absolute;
        z-index: 11;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: plum;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 1px #f2f2f2;
        color: #333333;
        transition: background-color .5s;
    }
    .placeholder{
        height: 1.3rem;
    }
    .top>li{
        flex-grow: 1;
        flex-basis: 0;
        display: flex;
        font-size: .34rem;
        align-items: center;
    }
    .left{
        justify-content: left;
        padding-left: .2rem;
    }
    .center{
        justify-content: center;
    }
    .right{
        padding-right: .2rem;
        justify-content: flex-end;
    }
</style>
