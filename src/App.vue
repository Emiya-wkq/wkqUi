<template>
  <div id="app">
    <div class="frameTitle">
        <img src="./assets/timg.png" class="wkqLogo"/>Wkq-UI
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>
<style scoped>
  .wkqLogo{
    height: 40px;
  }
  .frameTitle{
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: rgb(19,171,288);
    font-size: 36px;
    border-bottom: solid 1px #eee;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
  }
</style>
<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

/* 头部h1 */
.th1{
  margin: 20px 0;
}
  /* 头部h2 */
.th2{
  margin: 20px 0;
}
  /* 头部p */
.tp{
  color: #999;
}
  /* 代码 */
  .code{
    padding: 5px 10px;
    border-radius: 3px;
    background-color: #eee;
  }
  /* 内容p */
  .bp{
    line-height: 35px;
  }
  .warning{
    color: #b30000;
    font-weight: 600;
  }
</style>
