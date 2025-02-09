import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import yonghuxingcheng from '@/views/modules/yonghuxingcheng/list'
    import news from '@/views/modules/news/list'
    import xingchengfenxi from '@/views/modules/xingchengfenxi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import caijishuju from '@/views/modules/caijishuju/list'
    import fenxiyuan from '@/views/modules/fenxiyuan/list'
    import caijifenxi from '@/views/modules/caijifenxi/list'
    import zonghepinggu from '@/views/modules/zonghepinggu/list'
    import messages from '@/views/modules/messages/list'
    import caijiyuan from '@/views/modules/caijiyuan/list'
    import gonggaoxinxi from '@/views/modules/gonggaoxinxi/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/yonghuxingcheng',
        name: '用户行程',
        component: yonghuxingcheng
      }
      ,{
	path: '/news',
        name: '疫情资讯',
        component: news
      }
      ,{
	path: '/xingchengfenxi',
        name: '行程分析',
        component: xingchengfenxi
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/caijishuju',
        name: '采集数据',
        component: caijishuju
      }
      ,{
	path: '/fenxiyuan',
        name: '分析员',
        component: fenxiyuan
      }
      ,{
	path: '/caijifenxi',
        name: '采集分析',
        component: caijifenxi
      }
      ,{
	path: '/zonghepinggu',
        name: '综合评估',
        component: zonghepinggu
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
	path: '/caijiyuan',
        name: '采集员',
        component: caijiyuan
      }
      ,{
	path: '/gonggaoxinxi',
        name: '公告信息',
        component: gonggaoxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
