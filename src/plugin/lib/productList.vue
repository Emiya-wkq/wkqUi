<template>
    <div>
        <div class="list">
            <van-icon name="arrow-left"  @click="$router.back(-1)"  size=".43rem"></van-icon>
            <div class="type">{{name}}</div>
            <van-icon name="ellipsis" size=".43rem"></van-icon>
        </div>
        <div class="itemlist" v-for="item in list" :key="item.id">
            <div class="item">
                <div class="item-img">
                    <img :src="item.image " />
                </div>
                <div class="detail">
                    <div class="detail-text">{{item.name}}</div>
                    <div class="detail-center">
                        <ul >
                            <li class="detail-type" v-for="spe in item.type" :key="spe.id">{{spe.text}} X {{spe.num}}</li>
                        </ul>
<!--                        <ul>-->
<!--                            <li class="detail-order" v-for="dd in item.order" :key="dd.id">{{dd}}</li>-->
<!--                        </ul>-->
                    </div>
                    <div class="detail-bottom">
                        <div>
                            <div class="return">
                                <span class="price">
                                    ￥ {{item.sellingPrice}}
                                </span>
                                <span class="integral">
                                    下单返{{item.returenPoints}}积分
                                </span>
                            </div>
                            <div class="vipPrice">会员价 ￥{{item.vipPrice}}</div>
                        </div>
                        <div class="shopImg" @click="shopping(item.id)">
                            <van-icon class="imgIcon" name="shopping-cart-o" color="#fff" size=".4rem"></van-icon>
                        </div>

                    </div>
                    <hr class="borderLine"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { subjectGoods } from '../api/home'
    import { addGoods } from '../api/shoppingCart'
    export default {
        name: "productList",
        data (){
            return {
                storeId: '',
                name: this.$route.query.name,
                list: [],
            }
        },
        methods: {
            getSubjectGoods(){
                subjectGoods({
                    page: 1,
                    rows:5,
                    subjectId:this.$route.query.subjectId
                }).then(res=> {
                    this.list = res.data.data;
                    console.log(this.list)
                    // this.skuData = this.list.map(item => {
                    //
                    // })
                })
            },
            shopping(id){
                addGoods({
                    num: 1,
                    storeId: this.storeId,
                    storeItemId: id
                }).then(() => {
                    this.$toast('添加成功')
                })
            }
        },
        created(){
            this.getSubjectGoods()
            this.storeId = localStorage.getItem('storeId')
        }
    }
</script>

<style scoped>
    .list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .07rem .2rem;
        height: .9rem;
        box-shadow:0rem 0rem .1rem .02rem rgba(0, 0, 0, 0.2);
        margin-bottom: .2rem;
    }
    .type {
        font-size: .32rem;
        color: #333;

    }
    .itemlist{
        padding: .2rem;
    }
    .item {
        display: flex;
        justify-content: flex-start;
    }
    .item-img {
        width: 2.4rem;
        height: 2.4rem;
        margin-right: .2rem;
    }
    .item-img img {
        width: 100%;
        height: 100%;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .detail {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: .24rem;
    }
    .detail-center {
        display: flex;
        justify-content: flex-start;
        margin-bottom: .2rem;
    }
    .detail-bottom {
        display: flex;
        justify-content: space-between;
    }
    .detail-text {
        font-size: .3rem;
    }
    .detail-type {
        color: #999;
    }
    .detail-order {
        display: inline-block;
        padding: .04rem .15rem;
        background:rgba(255,230,229,1);
        border:1px solid rgba(255,181,178,1);
        border-radius:16px;
        color: #E02F28;
        margin-left: .1rem;
    }
    .return {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
    }
    .price {
        font-size: .3rem;
        color: #999;
    }
    .integral {
        color: #E02F28;
        padding: .02rem .1rem;
        background:rgba(255,255,255,1);
        border:1px solid rgba(224,47,40,1);
        border-radius:16px;
        margin-left: .15rem;
    }
    .vipPrice {
        color: #FFA93F;
        font-size: .36rem;
    }
    .shopImg {
        width:.6rem;
        height: .6rem;
        border-radius:50%;
        background-color: #E02F28;
        position: relative;
    }
    .imgIcon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    .borderLine {
        background-color:#f00;
        opacity: 0.2;
        position: relative;
        bottom: -.2rem;
    }

</style>