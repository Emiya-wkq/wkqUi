<template>
    <div class="btn-control-panel" @click="clickEvent">
        <div
                :class="[
        'float-bubble',
        touching ? 'active' : '',
        isPullOver ? 'pull-over' : ''
      ]"
                :style="calcFloatStyle"
                ref="floatBubble"
                @touchstart="_touchStart"
                @touchmove.prevent.stop="_touchMove"
                @touchend="_touchEnd">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    // 自动靠边动画时间
    const PULL_OVER_TIME = 500
    const DISTANCE_EDGE = 0

    export default {
        name: 'w-floatButton',
        created() {
            this.touch = {}
        },
        props: {
            size: {
                type: Number,
                default: 50
            },
            // true 随意移动，最终停靠在移动后的位置；false 最终会靠边儿停靠
            isFreeMove: {
                type: Boolean,
                default: true
            },
            // 防止与iOS系统自带侧滑返回页面功能冲突，添加一个距离边界的值
            distanceToEdge: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                touching: false, // 是否正在移动
                isPullOver: false, // 是否添加靠边儿停靠动画
                floatStyle: {}, // 样式(位置)
                bubbleSize: this.size // 浮动按钮尺寸
            }
        },
        computed: {
            // 位置样式定位{ left: 0, top: 0 }
            calcFloatStyle() {
                return {
                    left: this.floatStyle.left + 'px',
                    top: this.floatStyle.top + 'px',
                    height: this.bubbleSize + 'px',
                    width: this.bubbleSize + 'px'
                }
            }
        },
        mounted() {
            const el = this.$refs.floatBubble
            this.floatStyle = {
                left: el.offsetLeft,
                top: el.offsetTop
            }
        },
        methods: {
            _getWindowSize() {
                // 此处两级嵌套，需要两层parent才能获取到容器
                const el = this.$refs.floatBubble.parentNode.parentNode
                const width = el.clientWidth
                const height = el.clientHeight
                return { width, height }
            },
            _touchStart(e) {
                const el = this.$refs['floatBubble'] // 浮标元素
                const startOffset = {
                    offsetLeft: el.offsetLeft,
                    offsetTop: el.offsetTop
                }
                // console.log(el.offsetTop, el.offsetLeft)

                // 记录 touchStart (pageX, pageY, 元素位置信息)
                const firstTouch = e.touches[0]
                // console.log(firstTouch)
                const { pageX, pageY } = firstTouch
                this.anchor = {
                    pageX,
                    pageY,
                    offsetLeft: startOffset.offsetLeft,
                    offsetTop: startOffset.offsetTop
                }
                this.touching = true
            },
            _touchMove(e) {
                const firstTouch = e.touches[0]
                // touchmove 移动差值计算
                const diffData = {
                    x: (this.anchor.pageX - firstTouch.pageX) | 0,
                    y: (this.anchor.pageY - firstTouch.pageY) | 0
                }
                // 设置新的位置
                this.floatStyle = {
                    left: this.anchor.offsetLeft - diffData.x,
                    top: this.anchor.offsetTop - diffData.y
                }
                this._insideLimit()
            },
            _touchEnd(e) {
                this.touching = false
                // 默认自动靠边显示设置, 添加动画
                if (!this.isFreeMove) {
                    this.isPullOver = true
                    const selfWidth = e.target.offsetWidth
                    const bodyWidth = this._getWindowSize().width

                    if (this.floatStyle.left < (bodyWidth - selfWidth) / 2) {
                        this.floatStyle.left = this.distanceToEdge
                    } else {
                        this.floatStyle.left = bodyWidth - selfWidth - this.distanceToEdge
                    }
                }
                // 动画完毕移除动画，防止拖动动画粘粘
                setTimeout(() => {
                    this.isPullOver = false
                }, PULL_OVER_TIME)
            },
            // touchmove 限定在可视的区域内(即在 window 视口内)
            _insideLimit() {
                const el = this.$refs.floatBubble
                let { left, top } = this.floatStyle
                const { width: w, height: h } = this._getWindowSize()

                if (top < 0) top = 0
                if (top > h - el.offsetHeight) top = h - el.offsetHeight

                if (left < 0) left = 0
                if (left > w - el.offsetHeight) left = w - el.offsetHeight
                this.floatStyle = {
                    left,
                    top
                }
            },
            clickEvent(e) {
                this.$emit('click', e)
            }
        }
    }
</script>

<style lang="less" scoped>
    @bubble_bg: rgba(0,0,0,.4);
    @bubble_size: 56px; /* 设置为一个默认样式, 但js中会重新设置覆盖此样式 */
    @DISTANCE_EDGE: .2rem;
    * {
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .btn-control-panel {
        /* 浮动按钮 */
        .float-bubble {
            position: absolute;
            left: @DISTANCE_EDGE;
            top: 50%;
            height: @bubble_size;
            width: @bubble_size;
            border-radius: 50%;
            overflow: hidden;
            background: @bubble_bg;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            font-weight: 100;
            color: #666;
            box-sizing: border-box;
            transition: opacity 0.2s;
            z-index: 98;
            &.active {
                opacity: 0.6;
                transition: transform 0.2s;
                transform: scale(1.2);
            }

            /* 靠边停靠动画 */
            &.pull-over {
                transition: left 0.2s;
            }

            &::before,
            &::after {
                content: '';
                display: block;
                background: #fff;
                border-radius: 50%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            .inner-dot {
                display: block;
                background: #fff;
                border-radius: 50%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 40%;
                height: 40%;
                opacity: 1;
            }
        }
    }
</style>
