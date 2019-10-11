<template>
    <div>
<!--        <div class="skuDetail">-->
<!--            <p>活动价：{{nowDetail.activityPrice}}</p>-->
<!--            <p>销售价：{{nowDetail.sellingPrice}}</p>-->
<!--            <p>库存：{{nowDetail.storageNum}}</p>-->
<!--            <p></p>-->
<!--        </div>-->
        <div v-for="(item,titIndex) in sku.tree" :key="titIndex" class="skuSelectBox">
            <p class="title">{{item.k}}</p>
            <ul class="skuList">
                <li v-for="(spec,sIndex) in item.v"
                    :key="sIndex"
                    :style="Object.assign({color: checkColor(spec.disable,spec.selected), background: checkBgColor(spec.disable,spec.selected), border: `solid 1px ${checkColor(spec.disable,spec.selected)}`}, itemStyle )"
                    @click="skuClick(spec,item.k_s)">
                    {{spec.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    // 多数组全排序
    function ranking(x) {
        let arr = x
        let sarr = [[]];
        for (let i = 0; i < arr.length; i++) {
            let tarr = [];
            for (let j = 0; j < sarr.length; j++)
                for (let k = 0; k < arr[i].length; k++)
                    tarr.push(sarr[j].concat(arr[i][k]));
            sarr = tarr;
        }
        return sarr
    }
    export default {
        name: 'w-sku',
        props:{
          sku: Object,
          itemStyle: Object,
          fontColor:{
              type: String,
              default: '#333333'
          },
          bgColor:{
              type: String,
              default: '#ffffff'
          },
          selectedFontColor:{
              type: String,
              default: '#ffffff'
          },
          selectedBgColor:{
              type: String,
              default: '#ffa025'
          },
          disableFontColor:{
              type: String,
              default: '#dddddd'
          },
          disableBgColor:{
              type: String,
              default: '#ffffff'
          }

        },
        watch:{

        },
        data() {
            return {
                usable:{},
                // 此为数据格式展示
                nowDetail:{
                    id: 2259, // skuId，下单时后端需要
                    activityPrice: 100, // 价格（单位分）
                    sellingPrice: 1,
                    s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '3026', // 规格类目 k_s 为 s2 的对应规格值 id
                    storageNum: 110 // 当前 sku 组合对应的库存
                }
            }
        },
        mounted() {
            // 初始化，置灰没有任何组合的spec
            this.sku.tree.forEach((item)=>{
                item.v.forEach((vItem)=>{
                    this.checkDisable(vItem,item.k_s,{})
                })
            })

        },
        methods:{
            // 检测当前按钮文字设置颜色
            checkColor(disable, selected){
                if(disable){
                    return this.disableFontColor
                } else {
                    if(selected) {
                        return this.selectedFontColor
                    }else{
                        return this.fontColor
                    }
                }
            },
            // 检测当前按钮背景设置颜色
            checkBgColor(disable, selected){
                if(disable){
                    return this.disableBgColor
                } else {
                    if(selected) {
                        return this.selectedBgColor
                    }else{
                        return this.bgColor
                    }
                }
            },
            checkDisable(data, n, nowCanSelect){
                let v = []  // 已选sku列表
                let nowSelect = n   // 当前选择行名
                nowCanSelect[n] = data.id

                for (let i in nowCanSelect) {
                    v.push({[i]: nowCanSelect[i]})
                }

                // 根据所选sku组名，得到当前所选id
                let nowSelectVal = ''
                v.forEach((item)=>{
                    item[nowSelect] ? nowSelectVal = item[nowSelect] : ''
                })
                // 可组合的规格
                let canMatchList = {}
                this.sku.tree.forEach((item) => {
                    // 与当前行外的已选选项进行匹配，判断是否有可用组合
                    if (!nowCanSelect[item.k_s]) {   //若当前行名不存在于已选列表(当前行全部可参与全排序)
                        canMatchList[item.k_s] = item.v.map((mapItem) => {
                            return mapItem.id
                        })
                    } else {
                        canMatchList[item.k_s] = [String(nowCanSelect[item.k_s])]
                    }
                })

                // 将可组合的规格转为数组
                let canMatchListStr = []
                for (let i in canMatchList) {
                    canMatchListStr.push(canMatchList[i])
                }
                // 将可组合的规格数组进行全排序（根据当前所选产生的全部组合）
                let allRanking = ranking(canMatchListStr)

                // 为每组可选规格新建全排序属性
                this.sku.list.forEach((item)=>{
                    item.allRanking = []
                    this.sku.tree.forEach((tItem)=>{
                        item.allRanking.push(item[tItem.k_s])
                    })

                })
                // 判断当前规格是否要变灰
                this.sku.tree.forEach((item)=>{
                    if (item.k_s === nowSelect) {
                        item.v.forEach((vItem)=> {
                            if (vItem.id === nowSelectVal) {
                                let l = allRanking.filter((item)=>{
                                    return item.includes(vItem.id)
                                })
                                let existenceSelect
                                l.forEach((item)=>{
                                    this.sku.list.forEach((lItem)=>{
                                        // 将当前spec的全部可能转化为字符串，与全部可能组成的数组转化为字符串的进行对比
                                        // 如果一样则证明不该置灰（先排序，防止顺序不同导致的字符串不相等）
                                        if ((lItem.allRanking).sort().toString() === item.sort().toString()) {
                                            existenceSelect = true
                                        }
                                    })
                                })
                                existenceSelect? vItem.disable = false : vItem.disable = true
                            }
                        })
                    }
                })
            },
            skuSelected(data, n) {
                this.sku.tree.forEach((item) => {
                    if (item.k_s === n) {
                        item.v.forEach((vItem) => {
                            if (vItem.id === data.id) {
                                vItem.selected = true
                            } else {
                                vItem.selected = false
                            }
                        })
                    }
                })
                // 设置sku详情
                if(Object.keys(this.usable).length === this.sku.tree.length){
                    // 必须进行过sku置灰方法，才会有allRanking属性
                    this.sku.list.forEach((item)=>{
                        if(String(Object.values(this.usable).sort()) === String(item.allRanking.sort())){
                            this.nowDetail = item

                            //
                            // 派发选择完成及变化事件
                            //

                            let specArray = []
                            let specString = ''
                            this.sku.tree.forEach(treeItem=>{
                                treeItem.v.forEach(vItem=>{
                                    if(vItem.selected){
                                        specArray.push({
                                            name: treeItem.k,
                                            val: vItem.name
                                        })
                                        specString += vItem.name + ' '
                                    }
                                })
                            })
                            item.specArray = specArray
                            item.specString = specString
                            this.$emit('change', item)
                        }
                    })
                }
            },
            skuSelectedCancel(data,n){
                delete this.usable[n]
                this.sku.tree.forEach((item)=>{
                    if(item.k_s === n){
                        item.v.forEach((vItem)=>{
                            if (vItem.id === data.id) {
                                vItem.selected = false
                                //
                                //
                                // 反选后，触发change，清空数据
                                //
                                //
                                this.$emit('change', vItem)
                            }
                        })
                    }
                })
            },
            skuClick(data,n){
                // 点击无效规格不进行任何操作
                if (data.disable) {

                    return false
                }
                // -------------------------
                this.usable[n] = data.id
                if (!data.selected){
                    this.skuSelected(data,n)

                } else {
                    this.skuSelectedCancel(data,n)
                }


                // 检测无法组成规格的spec并置灰
                this.sku.tree.forEach((item)=>{
                    item.v.forEach((vItem)=>{
                        let nowCanSelect = {}
                        // 深拷贝当前选项(仅适用于当前这种二层关系)
                        for(let i in this.usable) {
                            nowCanSelect[i] = Object.assign(this.usable[i])
                        }
                        nowCanSelect[item.k_s] = vItem.id
                        this.checkDisable(vItem,item.k_s,nowCanSelect)
                    })
                })
            }
        }
    }
</script>

<style scoped>
    li{
        list-style: none;
    }
    .skuDetail{
        border: solid 1px #999;
        width: 200px;
        margin-bottom: 20px;
        padding: 10px;
    }
    .skuSelectBox{
        display: flex;
        flex-direction: column;
        align-items: self-start;
    }
    .title{
        font-size: 12px;
        margin: 10px 0;
        border:none;
        height: auto;
        line-height: 20px;
        color: #ffa025;
    }
    .skuList{
        display: flex;
        flex-wrap: wrap;
    }
    .skuList li{
        margin-right: 10px;
        padding: 2px 10px;
        border-radius: 5px;
        border: solid 1px #666;
        font-size: 14px;
        margin-bottom: 10px;
    }
</style>