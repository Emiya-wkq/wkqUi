<template>
    <div class="tabBigBox">
        <ul class="tabBox">
            <li v-for="(i,index) in tabData" :style="{color:index===nowTab ? selectedColor : color }" :key="index" @click="changeTab(i,index)">{{i[label]}}</li>
        </ul>
        <div class="slider" :class="{cTransition:true}" :style="{width:100/tabData.length + '%',marginLeft:nowTab*100/tabData.length + '%'}">
            <div class="relSlider" :style="{width: sliderWidth, backgroundColor: selectedColor}"></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "tab",
    props:{
      tabData:{
        type: Array
      },
      transition:{
        type: Boolean,
        default: true
      },
      sliderWidth:{
        type: String,
        default: '70%'
      },
      color:{
         type: String,
         default: '#666'
      } ,
      label:{
         type: String,
         default: 'name'
      },
      selectedColor :{
        type: String,
        default: 'red'
      },
      defaultTab: null
    },
    data(){
      return {
        nowTab: 0
      }
    },
    created(){
        if (this.defaultTab) {
            this.tabData.forEach((item,index)=>{
                if (JSON.stringify(item) === JSON.stringify(this.defaultTab)) {
                    this.nowTab = index
                }
            })
        }
    },
    methods:{
      changeTab(item,index){
        this.nowTab = index
        this.$emit('tabChange',item)
      }
    }
  }
</script>

<style scoped>
    .tabBigBox {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        position: relative;
    }
    .tabBox{
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 12px;
        background-color: white;

        left: 0;
        z-index: 1;
    }
    .tabBox li{
        flex-grow: 1;
        width: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .slider{
        height: 2px;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
    }
    .cTransition{
        transition: margin-left .3s;
    }
    .relSlider{
        width: 70%;
        margin: auto;
        height: 2px;
        background-color: red;

    }
    .redColor{
        color: red;
    }
</style>