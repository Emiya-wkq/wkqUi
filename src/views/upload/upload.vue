<template>
    <div>
        <h1 class="th1">文件上传</h1>
        <p class="tp">一般用于图片上传，极简的一款文件上传插件，只提供最核心的上传功能，适合简单的需求。</p>
        <h2 class="th2">示例:</h2>
        <div class="phone">
            <div class="phoneMain">
                <p class="bp" style="margin-bottom: 20px">将标签包裹在想要实现上传功能的标签外即可。</p>
                <w-upload url="http://api.reallychoose.com/user/upload" method="post" fileName="multipartFile" @success="success">
                    <w-button>上传</w-button>
                </w-upload>
                <p>成功后图片展示:</p>
                <img v-if="imgPath" style="max-width: 150px" :src="imgPath"/>
            </div>

        </div>
        <p style="margin-top: 10px">tips:由于github不支持混合请求，此示例可能无效，可download后本地使用</p>
        <h2 class="th2">template:</h2>
        <div class="code" style="color: #666">
            <pre>
        &lt;w-upload
         url="http://api.reallychoose.com/user/upload"
         method="post"
         fileName="multipartFile"
         @success="success"
        >
            &lt;button>上传&lt;/button>
        &lt;/w-upload>
        &lt;p>成功后图片展示:&lt;/p>
        &lt;img v-if="imgPath" style="max-width: 150px" :src="imgPath"/>
            </pre>
        </div>
        <h2 class="th2">js:</h2>
        <div class="code" style="color: #666">
            <pre>
                <code>
    export default {
        data() {
            return {
                imgPath: ''
            }
        },
        methods:{
            success(response){
                this.imgPath = 'http://reallychoose.oss-cn-hangzhou.aliyuncs.com/' + response.data
            }
        }
    }
                </code>
            </pre>
        </div>

        <h2 class="th2">Attributes</h2>
        <el-table
                :data="Attributes"
                style="width: 100%">
            <el-table-column
                    prop="attrName"
                    label="参数"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="explain"
                    label="说明"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="attrType"
                    label="类型">
            </el-table-column>
            <el-table-column
                    prop="optional"
                    label="可选值">
            </el-table-column>
            <el-table-column
                    prop="defaultVal"
                    label="默认值">
            </el-table-column>
        </el-table>
        <h2 class="th2">Events</h2>
        <el-table
                :data="Events"
                style="width: 100%">
            <el-table-column
                    prop="eventName"
                    label="事件名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="explain"
                    label="说明"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="optional"
                    label="参数">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgPath: '',
                Attributes:[
                    {
                        attrName: 'url',
                        explain: '必填，上传服务器的地址',
                        attrType: 'String',
                        optional: '--',
                        defaultVal: '--'
                    },{
                        attrName: 'method',
                        explain: '上传方法',
                        attrType: 'String',
                        optional: 'get、post等',
                        defaultVal: 'post'
                    },{
                        attrName: 'fileName',
                        explain: '必填，后台所需文件的字段名',
                        attrType: 'String',
                        optional: '--',
                        defaultVal: '--'
                    },{
                        attrName: 'uploadList',
                        explain: '是否批量上传',
                        attrType: 'String',
                        optional: 'true，false',
                        defaultVal: 'false'
                    }
                ],
                Events:[
                    {
                        eventName: 'success',
                        explain: '上传成功后的回调',
                        optional: 'response(成功后后台返回数据)',
                    },{
                        eventName: 'error',
                        explain: '失败后回调',
                        optional: '完整的xhr数据',
                    }
                ]
            }
        },
        methods:{
            success(response){
                this.imgPath = 'http://reallychoose.oss-cn-hangzhou.aliyuncs.com/' + response.data
            }
        }
    }
</script>

<style scoped>
    .phone{
        width: 300px;
        height: 400px;
        position: relative;
        border: solid 1px #333333;
        padding: 80px 5px;
        border-radius: 30px;
        background-color: #333333;

    }
    .phoneMain{
        width: 100%;
        height: 100%;
        background-color: white;
        padding: 10px;
        overflow: hidden;
        box-sizing: border-box;
    }
    .longCode{
        height: 500px;
        width: 100%;
        box-sizing: border-box;
    }
</style>