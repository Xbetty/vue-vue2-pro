<template>
    <div>
        <h1>about</h1>
        <p>{{aboutMsg}}</p>
        <router-view></router-view>
        <router-view name="a"></router-view>
        <router-view name="b"></router-view>
    </div>
</template>
<script>
export default {
  data () {
    return {
      aboutMsg: '我是about组件'
    }
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
</style>
