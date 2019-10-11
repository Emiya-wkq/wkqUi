<template>
    <div>
        <main class="mainBox" ref="main" @click="mainClick">
            <slot>

            </slot>
        </main>
        <input type="file" ref="input" class="file" @change="fileChange"/>
    </div>
</template>

<script>
    export default {
        name: 'w-upload',
        props:{
            // 是否传多张图
            uploadList:{
                type: Boolean,
                default: false
            },
            method:{
                type: String,
                default: 'post'
            },
            url:{
                type: String
            },
            fileName:{
                type: String
            }
        },
        data() {
            return {}
        },
        methods:{
            mainClick(){
                this.$refs.input.click()
            },
            fileChange(e){
                let data = new FormData()
                let xhr = new XMLHttpRequest()
                if(this.uploadList){
                    data.append(this.fileName, e.target.files)
                } else {
                    data.append(this.fileName, e.target.files[0])
                }

                xhr.open(this.method, this.url, "async");
                xhr.send(data);
                xhr.onreadystatechange = () => {
                    if(xhr.readyState === 4){
                        if(xhr.status === 200){
                            this.$emit('success',JSON.parse(xhr.response))
                        } else {
                            this.$emit('error',JSON.parse(xhr))
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .mainBox{

    }
    .file{
        height: 0;
        width: 0;
        position: absolute;
        left: -9999px;
    }
</style>