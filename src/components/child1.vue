<template>
    <div>
        <div>
            子组件（子组件向父组件进行传值）：
        <span>{{childValue}}</span>
        <!-- 定义一个子组件传值的方法 -->
        <input type="button" value="点击向父组件传参" v-on:click="childClick">
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      childValue: '我是子组件的数据'
    }
  },
  methods: {
    childClick () {
      console.log('childValue:', this.childValue)
      // childByValue是在父组件on监听的方法
      // 第二个参数this.childValue是需要传的值
      this.$emit('childByValue', this.childValue)
    }
  }
}
</script>
