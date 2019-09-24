<template>
    <div class="bigBox">
        <ul class="flexBox">
            <li @click="jump('/store/home')">
                <div class="spaceButton">
                    <van-icon name="wap-home" size='.42rem' v-if="$route.path==='/store/home'" color='#f00'/>
                    <van-icon name="wap-home" size='.42rem' v-else color='#999'/>
                    <!-- <img src="../assets/image/pic_icon_buy.png"  v-if="$route.path==='/home'" class="navButton"/>
                    <img src="../assets/image/ic_shopping order_normal@3x.png" v-else /> -->
                    <p :class="{selected: $route.path==='/store/home'}">首页</p>
                </div>
            </li>
            <li @click="jump('/my')">
                <div class="spaceButton">
                    <!-- <img src="../assets/image/pic_icon_information.png" class="navButton"/> -->
                    <van-icon name="contact" size='.42rem' v-if="$route.path==='/my'" color='#f00'/>
                    <van-icon name="contact" size='.42rem' v-else color='#999'/>
                    <p :class="{selected: $route.path==='/my'}">我的</p>
                    <!-- <p :class="{selected: true}">我的</p> -->
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

  export default {
    name: "BottomNav",
    data(){
      return {

      }
    },
    mounted(){

    },
    methods:{
      jump(url){
        this.$router.push({
          path: url,
          query:{

          }
        })
      }
    }
  }
</script>

<style scoped>
    .flexBox{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: .98rem;
        width: 100%;
        font-size: 0.22rem;
        position: fixed;
        bottom: 0;
        left: 0;
        border-top: solid 1px #efefef;
        background-color: #fafafa;
    }
    .flexBox li{
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 0;
    }
    .flexBox li:first-child{
        border-right: 2px #E6E6E6 solid;
    }
    .selected{
        color: #DB2F28;
    }
    .spaceButton{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: bold;
    }
</style>