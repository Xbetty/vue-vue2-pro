<template>
    <div>
        <h1>User</h1>
        <div>我是User组件{{dynamicSegment}}</div>
        <ul class="subnave f-cb">
          <!-- a标签中href不需要写地址，页面编译完成后自动会在href中加入对应的路径 -->
          <router-link :to='{name:"Study"}' exact="" tag="li">
            <a>Study</a>
          </router-link>
          <router-link :to='{name:"Hobby"}' exact="" tag="li">
            <a>Hobby</a>
          </router-link>
        </ul>
        测试数据：{{test}}
        <router-view/>
    </div>
</template>
<script>
import Study from './study'
import Hobby from './hobby'
export default {
  data () {
    return {
      dynamicSegment: '',
      test: '改变之前'
    }
  },
  components: {
    Study,
    Hobby
  },
  beforeCreate () {
    // 组件生命周期函数
    console.log('beforeCreate')
  },
  // 当进入组件之前，执行beforeRouteEnter路由钩子函数
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    console.log('this', this)
    // 结果为undefined，因为在执行beforeRouteEnter时候，组件还没有被创建出来，先执行beforeRouteEnter，再执行beforeCreate
    next((vm) => {
      vm.test = '我改变了'
      console.log('vm.test', vm.test)
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 离开组件的时候触发
    // 什么都不写的时候，不会离开（走下一步）
    next()
  },
  // watch: {
  //   $route (to, from) {
  //     // to表示的是你要去的那个组件，from表示的是你从哪个组件过来的，他们是两个对象，你可以把它打印出来，它们也有一个param属性
  //     console.log('去的组件：', to)
  //     console.log('来的组件', from)
  //     this.dynamicSegment = to.params.id
  //     console.log('id', to.params)
  //   }
  // },
  mounted () {
    console.log('id22222', this.$route.params)
    this.dynamicSegment = this.$route.params.id
  }
}
</script>
