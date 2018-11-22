<template>
    <div>
        <h1>home</h1>
        <p>{{msg}}</p>
        <p>
            <router-link to="/home/phone">手机</router-link>
            <router-link to="/home/tablet">平板</router-link>
            <router-link to="/home/computer">电脑</router-link>
            <router-view></router-view>
        </p>
        <!-- <div>
            父组件（父组件向子组件进行传值）：
            <input type="text" v-model="name">
            <br>
            <br>
            引入子组件
            <child :inputName='name'></child>
        </div>
        <div>
            父组件（子组件向父组件进行传值）：
            <span>{{sonValue}}</span>
            <br>
            引入子组件，定义一个on的方法监听子组件的状态
            <child1 @childByValue="childByValue"></child1>
        </div> -->
        <!-- <div>
            <p>兄弟组件传参</p>
            <phone></phone>
            <tablet></tablet>
        </div> -->
    </div>
</template>
<script>
import child from './child'
import child1 from './child1'
import phone from './phone'
import tablet from './tablet'
export default {
  data () {
    return {
      msg: '我是home组件',
      name: '',
      sonValue: ''
    }
  },
  components: {
    child,
    child1,
    phone,
    tablet
  },
  methods: {
    childByValue: function (childValue) {
      console.log(childValue)
      this.sonValue = childValue
    }
  }
}
</script>
