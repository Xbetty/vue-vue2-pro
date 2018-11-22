<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="tablist">
      <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/hello">Hello</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <!-- 增加两个到user组件的导航，可以看到这里使用了不同的to属性 -->
      <router-link to="/user/123">User123</router-link>
      <router-link to="/user/456">User456</router-link>
    </div>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a.router-link-active {color: red;}
.tablist {
  width: 100%;
}
</style>
