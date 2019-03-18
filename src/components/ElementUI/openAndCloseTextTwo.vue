<template>
  <div :class="showTotal ? 'total-introduce' : 'detailed-introduce'">
    <div class="intro-content" :title="introduce" ref="desc">
      <span class="merchant-desc" v-if="introduce">
        {{introduce}}
      </span>
      <div class="unfold" @click="showTotalIntro" v-if="showExchangeButton">
        <p>{{exchangeButton ? '展开' : '收起'}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      introduce: '放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格',
      // 是否展示所有文本内容
      showTotal: true,
      // 展开还是收起
      exchangeButton: true,
      // 是否显示展开收起
      showExchangeButton: false,
      rem: ''
    }
  },
  methods: {
    showTotalIntro () {
      console.log(this.showTotal)
      this.showTotal = !this.showTotal
      this.exchangeButton = !this.exchangeButton
    },
    getRem () {
      console.log('getRem')
      const defaultRem = 16
      let winWidth = window.innerWidth
      console.log('winWidth:' + winWidth)
      let rem = winWidth / 375 * defaultRem
      return rem
    }
  },
  watch: {
    'introduce': function () {
      this.$nextTick(function () {
        console.log('nextTick')
        // 判断介绍是否超过四行
        let rem = parseFloat(this.getRem())
        console.log('watch 中的rem', rem)
        if (!this.$refs.desc) {
          console.log('desc null')
          return
        }
        let descHeight = window.getComputedStyle(this.$refs.desc).height.replace('px', '')
        console.log('descHeight:' + descHeight)
        console.log('如果 descHeight 超过' + (5.25 * rem) + '就要显示展开按钮')
        if (descHeight > 5.25 * rem) {
          console.log('超过了四行')
          // 显示展开收起按钮
          this.showExchangeButton = true
          this.exchangeButton = true
          // 不是显示所有
          this.showTotal = false
        } else {
          // 不显示展开收起按钮
          this.showExchangeButton = false
          // 没有超过四行就显示所有
          this.showTotal = true
          console.log('showExchangeButton', this.showExchangeButton)
          console.log('showTotal', this.showTotal)
        }
      }.bind(this))
    }
  }
}
</script>
<style scoped>
.total-introduce {
    height: auto;
    overflow: hidden;
    font-size: 14px;
    color: #434343;
    margin: 10px;
}
.intro-content .merchant-desc {
  width: 100%;
  line-height: 21px;
}
</style>
