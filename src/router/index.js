import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import HelloWorld from '@/components/HelloWorld'
import ElementUI from '@/components/ElementUI/index.vue'
import Upload from '@/components/ElementUI/upload.vue'
import OpenAndCloseTextOne from '@/components/ElementUI/openAndCloseTextOne.vue'
import OpenAndCloseTextTwo from '@/components/ElementUI/openAndCloseTextTwo.vue'
import EleInput from '@/components/ElementUI/input'
import EleSelect from '@/components/ElementUI/select'
import Home from '@/components/home'
import phone from '@/components/phone'
import tablet from '@/components/tablet'
import computer from '@/components/computer'
import About from '@/components/about'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import Baz from '@/components/Baz'
import User from '@/components/user'
import Study from '@/components/study'
import Hobby from '@/components/hobby'
import TestElementUI from '@/components/testElementUI'
import MenuManage from '@/components/MenuManage'
import PeopleManage from '@/components/PeopleManage'
// 要告诉vue使用vueRouter
Vue.use(Router)

export default new Router({
  routes: [
    // 重定向
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/eleIndex',
      name: 'ElementUI',
      component: ElementUI,
      children: [
        {
          path: 'input',
          name: 'EleInput',
          component: EleInput
        },
        {
          path: 'select',
          name: 'EleSelect',
          component: EleSelect
        },
        {
          path: 'upload',
          name: 'Upload',
          component: Upload
        },
        {
          path: 'openAndCloseTextOne',
          name: 'openAndCloseTextOne',
          component: OpenAndCloseTextOne
        },
        {
          path: 'openAndCloseTextTwo',
          name: 'openAndCloseTextTwo',
          component: OpenAndCloseTextTwo
        }
      ]
    },
    {
      path: '/home',
      // 下面这个属性也不少，因为，我们是先进入home页面，才能进入子路由
      component: Home,
      children: [
        {
          path: 'phone',
          component: phone
        },
        {
          path: 'tablet',
          component: tablet
        },
        {
          path: 'computer',
          component: computer
        },
        // 当进入到home时，下面的组件显示
        {
          path: '',
          component: phone
        }
      ]
    },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: '/',
          components: {
            default: Foo,
            a: Bar,
            b: Baz
          }
        }
      ]
    },
    // 新增user路径，配置了动态的id
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          path: '/study',
          name: 'Study',
          component: Study
        },
        {
          path: '/hobby',
          name: 'Hobby',
          component: Hobby
        }
      ]
    },
    {
      path: '/testElementUI',
      name: 'testElementUI',
      component: TestElementUI,
      children: [{
        path: '/MenuManage',
        name: 'manuManage',
        component: MenuManage
      },
      {
        path: '/PeopleManage',
        name: 'peopleManage',
        component: PeopleManage
      }]
    }
  ]
})
