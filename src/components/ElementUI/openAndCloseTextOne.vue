<template>
  <div>
    <div class="container" :title="film.filmInfo" ref="info" :class="fold ? 'fold' : 'unfold'"  v-if="film.filmInfo !==''" >
      <label>
        <span>{{film.filmInfo}}</span>
      </label>
    </div>
    <div class="show" @click="handleFold" v-show="fold">展开</div>
    <div class="show" @click="handleFold" v-show="!fold">收起</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 展开还是收起
      fold: true,
      // 是否展示所有文本内容
      showTotal: true,
      // 是否显示展开按钮
      showExchangeButton: false,
      film: {
        filmInfo: '放大看1价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格放大看价格'
      }
    }
  },
  watch: {
    'film.filmInfo': function () {
      console.log(2)
      this.$nextTick(() => {
        // 判断是否超过两行
        let infoHeight = window.getComputedStyle(this.$refs.info).height
        console.log('infoHeight', infoHeight)
        console.log(2)
      })
    }
  },
  methods: {
    handleFold () {
      this.fold = !this.fold
      this.$nextTick(() => {
        // 判断是否超过两行
        let infoHeight = window.getComputedStyle(this.$refs.info).height
        console.log('infoHeight', infoHeight)
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 判断是否超过两行
      let infoHeight = window.getComputedStyle(this.$refs.info).height.replace('px', '')
      console.log('infoHeight', infoHeight)
      if (infoHeight > 39) {
        this.fold = false
        console.log('超过了两行')
      } else {
        this.fold = true
        console.log('没超过两行')
        this.showExchangeButton = false
      }
    })
  }
}
</script>
<style scoped>
.container{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  /* margin: 10px 0 10px 0; */
  font-size: 15px;
}
.container.fold{
  -webkit-line-clamp:2;
}
.container.unfold{
  -webkit-line-clamp:100;
}
.show{
  font-size: 13px;
  color:cornflowerblue;
}
</style>
