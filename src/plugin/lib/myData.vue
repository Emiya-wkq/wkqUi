<template>
    <div class="userBox">
        <div class="userData">
            <van-uploader :after-read="afterRead" v-model="fileList" :preview-image="false">
                <img :src="headPhoto | img-filter"/>
            </van-uploader>
            <p @click="copyCode(userInfo.shareCode)"><span>{{userInfo.name}}</span>
                <a>邀请码:{{userInfo.shareCode}}<van-icon size=".28rem" color="#333" style="margin-left: .05rem" name="orders-o" /></a>
            </p>
        </div>

        <ul class="userOperation">
            <li @click="jump('/myCustomer')" v-if="userInfo.type !== '254'">我的客户<span> ></span></li>
            <li @click="jump('/customerOrder')" v-if="userInfo.type === '253'">客户订单<span> ></span></li>
            <li @click="jump('/agentOrder')" v-if="userInfo.type === '252' || userInfo.type === '251'">代理订单<span> ></span></li>
            <li @click="jump('/changePassword')">修改密码<span> ></span></li>
            <li @click="exit">退出登录<span> ></span></li>
        </ul>
    </div>
</template>

<script>
    import {logout} from '../api/user'
    import {uploadImg} from '../api/register'
    import {changeHeadPhoto} from '../api/home'
    export default {
        data() {
            return {
                fileList: [],
                headPhoto: '',
                userInfo:{

                }
            }
        },
        created(){
           this.userInfo = this.$store.state.userInfo
           this.headPhoto = this.userInfo.avatar
        },
        methods:{
            copyCode(code){
                let oInput = document.createElement('input') // 生成一个节点
                oInput.value = code  // 你要复制的文本
                oInput.readOnly = "readOnly"
                document.body.appendChild(oInput) // 插入文档
                oInput.select() // 选择对象
                document.execCommand("Copy") // 执行浏览器复制命令
                document.body.removeChild(oInput) //移除标签
                this.$toast('复制成功，如失败请手动复制')
            },
            jump(url){
                this.$router.push({
                    path: url,
                    query:{

                    }
                })
            },
            exit(){
                this.$dialog.confirm({
                    title: '确认退出登录？'
                }).then(() => {
                    logout().then(()=>{
                        localStorage.clear()
                        this.$store.commit('setUserInfo', '')
                        console.log(this.$store.state.userInfo)
                        this.$router.push('/login')
                    })
                }).catch(() => {
                    // on cancel
                });

            },
            // 上传图片到服务器
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                let data = new FormData()
                data.append('multipartFile',file.file)
                uploadImg(data).then(res=>{
                    this.headPhoto =  res.data.data
                    this.$set(this.userInfo,'headPhoto', res.data.data)
                    this.changeHeadPhoto(this.headPhoto)
                })
            },
            //上传新头像到服务器
            changeHeadPhoto(url){
                changeHeadPhoto({
                    imageUrl: url
                }).then(res=>{
                    if(res){
                        this.$toast(res.data.msg)
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .userBox{
        background-color: white;
    }
    .userData{
        padding-top: .8rem;
        color: #888;
        img{
            width: 1.4rem;
            height: 1.4rem;
            border-radius: .7rem;
        }
        p{
           margin-top: .1rem;
           display: flex;
           align-items: center;
           flex-direction: column;
           justify-content: center;
           font-size: .28rem;
           span{
              color: rgb(174, 47, 47);
           }
            a{
                display: flex;
                align-items: center;
            }
        }
    }
    .userOperation{
        margin-top: .3rem;
        text-align: left;
        li{
            padding: .15rem .2rem;
            font-size: .27rem;
            border-bottom: #ddd 1px dashed;
            color: #888;
            display: flex;
            justify-content: space-between;
            span{
                color: #999;
            }
        }

    }
</style>