<template>
  <div>
    <!-- 顶栏导航菜单 -->
    <!-- 导航菜单默认为垂直模式，通过mode属性可以使导航菜单变更为水平模式。另外，在菜单中通过submenu组件可以生成二级菜单 -->
    <!-- theme 主题色 可选值为light和dark，默认为light -->
    <!-- default-active 当前激活菜单的index -->
    <!-- router 是否使用vue-router模式，启用该模式会在激活导航时以index作为path进行路由跳转 -->
    <el-menu theme="dark" :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="/MenuManage">订单管理</el-menu-item>
      <el-menu-item index="/PeopleManage">人员管理</el-menu-item>
    </el-menu>
    <!-- 侧栏，垂直菜单，可内嵌子菜单 -->
    <!-- 通过el-menu-item-group组件可以实现菜单进行分组，分组名可以通过title属性直接设定也可以通过具名slot来设定 -->
    <el-row class="tac">
      <el-col :span="6" >
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MenuManage from './MenuManage'
import PeopleManage from './PeopleManage'
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  components: {
    MenuManage,
    PeopleManage
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
