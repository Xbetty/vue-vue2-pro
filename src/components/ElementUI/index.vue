<template>
  <div>
    <h3>Element-UI组件咯 好奇怪怎么没有这个项目啊</h3>
    <router-link :to="{path: '/eleIndex/input'}">input</router-link>
     <router-link :to="{path: '/eleIndex/upload'}">Upload</router-link>
     <router-link :to="{path: '/eleIndex/openAndCloseTextOne'}">文字过多展开与收起1</router-link>
     <router-link :to="{path: '/eleIndex/openAndCloseTextTwo'}">文字过多展开与收起2</router-link>
    <router-view/>
  </div>
</template>
