<!--  -->
<template>
        <div class="shop"> 
            <div class="search">
                <van-icon name="arrow-left" class="leftIcon" size=".42rem"/>
                <input type="text" class="searchInput" />
                <div class="area">余杭区</div>
            </div>
            <div class="allShop">
                <div class="shopList">
                    <div class="padding">
                        <ul class="detail">
                            <li v-for="item in lists" :key="item.id">
                                <img class="detail-img" :src="imgSrc" alt="">
                                <p class="detail-text">{{item.value}}</p>
                            </li>
                        </ul>
                        <div class="storeInfo">
                            <img class="storeImg" src="" alt="">
                            <div class="storeDetail">
                                <div class="storeAddress">
                                    <div class="store">南苑店</div>
                                    <div class="storeType">按摩</div>
                                </div>
                                <div class="storeMap">
                                    杭州市余杭区玩月街222号
                                </div>
                            </div>
                            <div class="enterStore">进入</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
</template>

<script>

export default {
    data () {
        return {
            lists:[
                {imgSrc:'',value:'传统糕点绿豆糕点绿豆糕'},
                {imgSrc:'',value:'按摩推拿拔罐套餐'},
                {imgSrc:'',value:'南极人颈椎按南极人颈椎按'},
            ]
        };
    },
    created () {

    },
    methods: {

    }
}
</script>

<style scoped >
.search{
    display:flex;
    justify-content: space-between;
    align-items: center;
    box-shadow:0rem 0rem .1rem .02rem rgba(0, 0, 0, 0.2);
    padding: .07rem .2rem;
}
.leftIcon {
    margin-right:.38rem;
}
.searchInput {
    width: 5.2rem;
    height: .66rem;
    line-height: .66rem;
    border: none;
    outline:none;
    background:rgba(230,230,230,1);
    border-radius: .06rem;
}
.area {
    font-size: .3rem;
    color: #FFA93F;
    padding-left: .2rem; 
}
.allShop {
    background-color: #F2F2F2;
    height: auto;
}
.shopList {
    width: 7.1rem;
    height: 3.6rem;
    margin: .2rem auto;
    background:linear-gradient(0deg,rgba(236,119,182,1) 0%,rgba(254,144,143,1) 100%);
    border-radius:12px;
}
.padding {
    padding: .3rem .4rem .2rem .4rem;
}
.detail {
    display: flex;
    justify-content: space-between;
    margin-bottom: .26rem;
}
.detail li {
    flex: 1;
}
.detail-img {
    border-radius: .06rem;
    border: 1px #fff solid;
}
.detail-text {
    font-size: .18rem;
    color: #333
}
.storeInfo {
    border: 1px red solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.storeImg {
    width: .82rem;
    height: .82rem;
    border-radius: 50%;
    border: 1px #ff0 solid;
}
.storeDetail {
    font-size: .3rem;
    border: 1px #fff solid; 
}
.enterStore {
    width: .6rem;
    font-size: .24rem;
    color: #fff;
    font-family:'PingFang SC';
    font-weight:500;
    border-left: 2px #fff solid;
    padding-left: .1rem;    
}
</style>