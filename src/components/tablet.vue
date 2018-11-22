<template>
    <div>
        <h1>home下的平板</h1>
        <div>
             在这里测试非父子组件进行传值(接收)：B组件
             <input type="button" value="增加" @click="getData">
             <span>{{name}}</span>
        </div>
    </div>
</template>
<script>
import bus from './bus.js'
export default {
  data () {
    return {
      name: 0
    }
  },
  created () {
    var vm = this
    // 用$on事件来接收参数
    // console.log('this', vm)
    vm.numberValue()
  },
  methods: {
    getData: function () {
      this.name++
    },
    numberValue (data) {
      bus.$on('val', (mes) => {
        this.name = mes
        console.log(mes)
      })
    }
  }
}
</script>
