<!--
 * @Author: your name
 * @Date: 2019-07-04 10:40:08
 * @LastEditTime: 2019-11-04 10:50:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2-pro\src\components\ElementUI\index.vue
 -->
<template>
  <div>
    <h3>插件集</h3>
    <!-- <router-link :to="{path: '/eleIndex/input'}">input</router-link>
     <router-link :to="{path: '/eleIndex/upload'}">Upload</router-link> -->
     <router-link :to="{path: '/plugins/openAndCloseTextOne'}">文字过多展开与收起1</router-link>
     <!-- <router-link :to="{path: '/eleIndex/openAndCloseTextTwo'}">文字过多展开与收起2</router-link> -->
     <router-link :to="{path: '/plugins/html2canvas'}">html2canvas</router-link>
    <router-view/>
  </div>
</template>
