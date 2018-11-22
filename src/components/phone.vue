<template>
    <div>
        <h1>home下的手机</h1>
        <div>
            在这里测试非父子组件进行传值(传值)：A组件
            <span>{{number}}</span>
            <input type="button" value="点击触发" @click="numberValue">
        </div>
    </div>
</template>
<script>
// 引入公共的bus，来作为中间传达的工具
import bus from './bus.js'
export default {
  data () {
    return {
      number: 4
    }
  },
  methods: {
    numberValue () {
      console.log('phone页面传参:', this.number)
      bus.$emit('val', this.number)
    }
  }
}
</script>
