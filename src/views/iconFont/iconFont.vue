<template>
    <div>
        <h1 class="th1">icon</h1>
        <p class="tp">一些常用icon，大小颜色均以字体形式来使用</p>
        <h2 class="th2">字体图标:</h2>
        <div class="phone" style="margin-right: 30px">
            <div class="phoneMain">
                <p>使用方法：点击图标复制类名，按照示例使用w-icon组件</p>
                <w-icon class="icon icon-address" ></w-icon>
            </div>
        </div>
        <h2 class="th2">template:</h2>
        <div class="code" style="color: #666">
            <pre>

    &lt;w-icon class="icon-address" > &lt;/w-icon>
            </pre>
        </div>
        <h2 class="th2">全部图标:</h2>
        <p class="tp">点击复制类名</p>
        <div class="code">
            <ul class="icon_lists dib-box">

                <li class="dib" @click="copy('icon-address')">
                    <w-icon class="icon iconfont icon-address" ></w-icon>
                    <div class="name">
                        address
                    </div>
                    <div class="code-name">.icon-address
                    </div>
                </li>

                <li class="dib" @click="copy('icon-camera')">
                    <w-icon class="icon iconfont icon-camera"></w-icon>
                    <div class="name">
                        camera
                    </div>
                    <div class="code-name">.icon-camera
                    </div>
                </li>

                <li class="dib" @click="copy('icon-course')">
                    <w-icon class="icon iconfont icon-course"></w-icon>
                    <div class="name">
                        course
                    </div>
                    <div class="code-name">.icon-course
                    </div>
                </li>

                <li class="dib" @click="copy('icon-addto')">
                    <w-icon class="icon iconfont icon-addto"></w-icon>
                    <div class="name">
                        addto
                    </div>
                    <div class="code-name">.icon-addto
                    </div>
                </li>

                <li class="dib" @click="copy('icon-audio')">
                    <w-icon class="icon iconfont icon-audio"></w-icon>
                    <div class="name">
                        audio
                    </div>
                    <div class="code-name">.icon-audio
                    </div>
                </li>

                <li class="dib" @click="copy('icon-delete')">
                    <w-icon class="icon iconfont icon-delete"></w-icon>
                    <div class="name">
                        delete
                    </div>
                    <div class="code-name">.icon-delete
                    </div>
                </li>

                <li class="dib" @click="copy('icon-edit')">
                    <w-icon class="icon iconfont icon-edit"></w-icon>
                    <div class="name">
                        edit
                    </div>
                    <div class="code-name">.icon-edit
                    </div>
                </li>

                <li class="dib" @click="copy('icon-settings')">
                    <w-icon class="icon iconfont icon-settings"></w-icon>
                    <div class="name">
                        settings
                    </div>
                    <div class="code-name">.icon-settings
                    </div>
                </li>

                <li class="dib" @click="copy('icon-cancel')">
                    <w-icon class="icon iconfont icon-cancel"></w-icon>
                    <div class="name">
                        cancel
                    </div>
                    <div class="code-name">.icon-cancel
                    </div>
                </li>

                <li class="dib" @click="copy('icon-down')">
                    <w-icon class="icon iconfont icon-down"></w-icon>
                    <div class="name">
                        down
                    </div>
                    <div class="code-name">.icon-down
                    </div>
                </li>

                <li class="dib" @click="copy('icon-home')">
                    <w-icon class="icon iconfont icon-home"></w-icon>
                    <div class="name">
                        home
                    </div>
                    <div class="code-name">.icon-home
                    </div>
                </li>

                <li class="dib" @click="copy('icon-loop')">
                    <w-icon class="icon iconfont icon-loop"></w-icon>
                    <div class="name">
                        loop
                    </div>
                    <div class="code-name">.icon-loop
                    </div>
                </li>

                <li class="dib" @click="copy('icon-nextsong')">
                    <w-icon class="icon iconfont icon-nextsong"></w-icon>
                    <div class="name">
                        nextsong
                    </div>
                    <div class="code-name">.icon-nextsong
                    </div>
                </li>

                <li class="dib" @click="copy('icon-bottom')">
                    <w-icon class="icon iconfont icon-bottom"></w-icon>
                    <div class="name">
                        bottom
                    </div>
                    <div class="code-name">.icon-bottom
                    </div>
                </li>

                <li class="dib" @click="copy('icon-guarantee')">
                    <w-icon class="icon iconfont icon-guarantee"></w-icon>
                    <div class="name">
                        guarantee
                    </div>
                    <div class="code-name">.icon-guarantee
                    </div>
                </li>

                <li class="dib" @click="copy('icon-agreement')">
                    <w-icon class="icon iconfont icon-agreement"></w-icon>
                    <div class="name">
                        agreement
                    </div>
                    <div class="code-name">.icon-agreement
                    </div>
                </li>

                <li class="dib" @click="copy('icon-prevent')">
                    <w-icon class="icon iconfont icon-prevent"></w-icon>
                    <div class="name">
                        prevent
                    </div>
                    <div class="code-name">.icon-prevent
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-play')">
                    <w-icon class="icon iconfont icon-play"></w-icon>
                    <div class="name">
                        play
                    </div>
                    <div class="code-name">.icon-play
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-close')">
                    <w-icon class="icon iconfont icon-close"></w-icon>
                    <div class="name">
                        close
                    </div>
                    <div class="code-name">.icon-close
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-refuse')">
                    <w-icon class="icon iconfont icon-refuse"></w-icon>
                    <div class="name">
                        refuse
                    </div>
                    <div class="code-name">.icon-refuse
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-selection')">
                    <w-icon class="icon iconfont icon-selection"></w-icon>
                    <div class="name">
                        selection
                    </div>
                    <div class="code-name">.icon-selection
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-previous')">
                    <w-icon class="icon iconfont icon-previous"></w-icon>
                    <div class="name">
                        previous
                    </div>
                    <div class="code-name">.icon-previous
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-increase')">
                    <w-icon class="icon iconfont icon-increase"></w-icon>
                    <div class="name">
                        increase
                    </div>
                    <div class="code-name">.icon-increase
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-save')">
                    <w-icon class="icon iconfont icon-save"></w-icon>
                    <div class="name">
                        save
                    </div>
                    <div class="code-name">.icon-save
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-collection')">
                    <w-icon class="icon iconfont icon-collection"></w-icon>
                    <div class="name">
                        collection
                    </div>
                    <div class="code-name">.icon-collection
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-upward')">
                    <w-icon class="icon iconfont icon-upward"></w-icon>
                    <div class="name">
                        upward
                    </div>
                    <div class="code-name">.icon-upward
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-history')">
                    <w-icon class="icon iconfont icon-history"></w-icon>
                    <div class="name">
                        history
                    </div>
                    <div class="code-name">.icon-history
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-locking')">
                    <w-icon class="icon iconfont icon-locking"></w-icon>
                    <div class="name">
                        locking
                    </div>
                    <div class="code-name">.icon-locking
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-restore')">
                    <w-icon class="icon iconfont icon-restore"></w-icon>
                    <div class="name">
                        restore
                    </div>
                    <div class="code-name">.icon-restore
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-safety')">
                    <w-icon class="icon iconfont icon-safety"></w-icon>
                    <div class="name">
                        safety
                    </div>
                    <div class="code-name">.icon-safety
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-phone')">
                    <w-icon class="icon iconfont icon-phone"></w-icon>
                    <div class="name">
                        phone
                    </div>
                    <div class="code-name">.icon-phone
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-relationship')">
                    <w-icon class="icon iconfont icon-relationship"></w-icon>
                    <div class="name">
                        relationship
                    </div>
                    <div class="code-name">.icon-relationship
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-next')">
                    <w-icon class="icon iconfont icon-next"></w-icon>
                    <div class="name">
                        next
                    </div>
                    <div class="code-name">.icon-next
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-refresh')">
                    <w-icon class="icon iconfont icon-refresh"></w-icon>
                    <div class="name">
                        refresh
                    </div>
                    <div class="code-name">.icon-refresh
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-visible')">
                    <w-icon class="icon iconfont icon-visible"></w-icon>
                    <div class="name">
                        visible
                    </div>
                    <div class="code-name">.icon-visible
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-withdraw')">
                    <w-icon class="icon iconfont icon-withdraw"></w-icon>
                    <div class="name">
                        withdraw
                    </div>
                    <div class="code-name">.icon-withdraw
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-mute')">
                    <w-icon class="icon iconfont icon-mute"></w-icon>
                    <div class="name">
                        mute
                    </div>
                    <div class="code-name">.icon-mute
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-eye_protection')">
                    <w-icon class="icon iconfont icon-eye_protection"></w-icon>
                    <div class="name">
                        eye_protection
                    </div>
                    <div class="code-name">.icon-eye_protection
                    </div>
                </li>

                <li class="dib"  @click="copy('icon-voice')">
                    <w-icon class="icon iconfont icon-voice"></w-icon>
                    <div class="name">
                        voice
                    </div>
                    <div class="code-name">.icon-voice
                    </div>
                </li>

                <li class="dib" @click="copy('icon-nickname')">
                    <w-icon class="icon iconfont icon-nickname"></w-icon>
                    <div class="name">
                        nickname
                    </div>
                    <div class="code-name">.icon-nickname
                    </div>
                </li>

                <li class="dib" @click="copy('icon-payment')">
                    <w-icon class="icon iconfont icon-payment"></w-icon>
                    <div class="name">
                        payment
                    </div>
                    <div class="code-name">.icon-payment
                    </div>
                </li>

                <li class="dib" @click="copy('icon-privacy_closed')">
                    <w-icon class="icon iconfont icon-privacy_closed"></w-icon>
                    <div class="name">
                        privacy_closed
                    </div>
                    <div class="code-name">.icon-privacy_closed
                    </div>
                </li>

                <li class="dib" @click="copy('icon-movie')">
                    <w-icon class="icon iconfont icon-movie"></w-icon>
                    <div class="name">
                        movie
                    </div>
                    <div class="code-name">.icon-movie
                    </div>
                </li>

                <li class="dib" @click="copy('icon-checkmore')">
                    <w-icon class="icon iconfont icon-checkmore"></w-icon>
                    <div class="name">
                        check more
                    </div>
                    <div class="code-name">.icon-checkmore
                    </div>
                </li>

                <li class="dib" @click="copy('icon-back')">
                    <w-icon class="icon iconfont icon-back"></w-icon>
                    <div class="name">
                        back
                    </div>
                    <div class="code-name">.icon-back
                    </div>
                </li>

                <li class="dib" @click="copy('icon-cancelwhite')">
                    <w-icon class="icon iconfont icon-cancelwhite"></w-icon>
                    <div class="name">
                        cancel white
                    </div>
                    <div class="code-name">.icon-cancelwhite
                    </div>
                </li>

                <li class="dib" @click="copy('icon-cancel1')">
                    <w-icon class="icon iconfont icon-cancel1"></w-icon>
                    <div class="name">
                        cancel
                    </div>
                    <div class="code-name">.icon-cancel1
                    </div>
                </li>

                <li class="dib" @click="copy('icon-faimlyalbum')">
                    <w-icon class="icon iconfont icon-faimlyalbum"></w-icon>
                    <div class="name">
                        faimly album
                    </div>
                    <div class="code-name">.icon-faimlyalbum
                    </div>
                </li>

                <li class="dib" @click="copy('icon-housecare')">
                    <w-icon class="icon iconfont icon-housecare"></w-icon>
                    <div class="name">
                        house care
                    </div>
                    <div class="code-name">.icon-housecare
                    </div>
                </li>

                <li class="dib" @click="copy('icon-masterctrl')">
                    <w-icon class="icon iconfont icon-masterctrl"></w-icon>
                    <div class="name">
                        master ctrl
                    </div>
                    <div class="code-name">.icon-masterctrl
                    </div>
                </li>

                <li class="dib" @click="copy('icon-messagewhite')">
                    <w-icon class="icon iconfont icon-messagewhite"></w-icon>
                    <div class="name">
                        message white
                    </div>
                    <div class="code-name">.icon-messagewhite
                    </div>
                </li>

                <li class="dib" @click="copy('icon-message')">
                    <w-icon class="icon iconfont icon-message"></w-icon>
                    <div class="name">
                        message
                    </div>
                    <div class="code-name">.icon-message
                    </div>
                </li>

                <li class="dib" @click="copy('icon-mirrorlightctrl')">
                    <w-icon class="icon iconfont icon-mirrorlightctrl"></w-icon>
                    <div class="name">
                        mirror light ctrl
                    </div>
                    <div class="code-name">.icon-mirrorlightctrl
                    </div>
                </li>

                <li class="dib" @click="copy('icon-groupctrl')">
                    <w-icon class="icon iconfont icon-groupctrl"></w-icon>
                    <div class="name">
                        group ctrl
                    </div>
                    <div class="code-name">.icon-groupctrl
                    </div>
                </li>

                <li class="dib" @click="copy('icon-search')">
                    <w-icon class="icon iconfont icon-search"></w-icon>
                    <div class="name">
                        search
                    </div>
                    <div class="code-name">.icon-search
                    </div>
                </li>

                <li class="dib" @click="copy('icon-paymentlife')">
                    <w-icon class="icon iconfont icon-paymentlife"></w-icon>
                    <div class="name">
                        payment life
                    </div>
                    <div class="code-name">.icon-paymentlife
                    </div>
                </li>

                <li class="dib" @click="copy('icon-stepback')">
                    <w-icon class="icon iconfont icon-stepback"></w-icon>
                    <div class="name">
                        step back
                    </div>
                    <div class="code-name">.icon-stepback
                    </div>
                </li>

                <li class="dib" @click="copy('icon-schedule')">
                    <w-icon class="icon iconfont icon-schedule"></w-icon>
                    <div class="name">
                        schedule
                    </div>
                    <div class="code-name">.icon-schedule
                    </div>
                </li>

            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                Attributes: [
                    {
                        date: 'background',
                        name: '背景色',
                        address: 'String',
                        optional: '色值',
                        defaultVal: 'rgb(19,171,228)'
                    }, {
                        date: 'color',
                        name: '字体颜色',
                        address: 'String',
                        optional: '色值',
                        defaultVal: 'white'
                    }, {
                        date: 'position',
                        name: '导航定位',
                        address: 'String',
                        optional: '推荐fixed与absolute',
                        defaultVal: 'fixed'
                    }, {
                        date: 'borderBottom',
                        name: '下边框',
                        address: 'String',
                        optional: '--',
                        defaultVal: 'solid 1px #0E7CA7'
                    }, {
                        date: 'height',
                        name: '高度',
                        address: 'String',
                        optional: '--',
                        defaultVal: '40px'
                    }, {
                        date: 'placeholder',
                        name: '占位',
                        address: 'Boolean',
                        optional: 'true false',
                        defaultVal: 'true'
                    }
                ],
                Events: [{
                    date: 'click',
                    name: '原生事件',
                    address: '--'

                }]
            }
        },
        methods: {
            copy(s) {
                this.$wCopy(s)
                this.$wToast('类名已复制到剪切板')
            }
        }
    }
</script>

<style scoped>
    pre {
        text-align: left;
    }
    .phone {
        width: 300px;
        height: 400px;
        position: relative;
        border: solid 1px #333333;
        padding: 80px 5px;
        border-radius: 30px;
        background-color: #333333;

    }

    .phoneMain {
        width: 100%;
        height: 100%;
        background-color: white;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
    }
    .icon_lists{
        display: flex;
        flex-wrap: wrap;
    }
    .dib{
        list-style: none;
        width: 120px;
        height: 110px;
        background-color: #f5f5f5;
        margin: 5px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .dib:hover{
        background-color: white !important;
    }
    .icon{
        font-size: 35px;
    }
    .name{
        font-size: 14px;
    }
    .code-name{
        font-size: 12px;
    }
</style>