import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = () => import('@/views/dashboard/index')

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: index,
        meta: { title: '主页', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/authority',
    component: Layout,
    redirect: '/authority/account',
    name: 'authority',
    meta: { title: '权限管理', icon: 'el-icon-key' },
    children: [
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/authority/account/index'),
        meta: { title: '账号管理', icon: 'el-icon-user-solid' }
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/authority/role/index'),
        meta: { title: '角色管理', icon: 'el-icon-s-custom' }
      },
      {
        path: 'resource',
        name: 'resource',
        component: () => import('@/views/authority/resource/index'),
        meta: { title: '资源管理', icon: 'el-icon-folder' }
      }
    ]
  },
  {
    path: '/products',
    component: Layout,
    redirect: '/products/productsList',
    name: 'products',
    meta: { title: '商品管理', icon: 'el-icon-s-shop' },
    children: [
      {
        path: 'productsList',
        name: 'productsList',
        component: () => import('@/views/products/productsList/index'),
        meta: { title: '商品列表', icon: 'el-icon-s-goods' }
      },
      {
        path: 'productsList/addProduct',
        name: 'productsListAdd',
        component: () =>
          import('@/views/products/productsList/productDetail/index'),
        hidden: true,
        meta: {
          title: '新增商品',
          icon: 'el-icon-s-goods',
          activeMenu: '/products/productsList'
        }
      },
      {
        path: 'productsList/editProduct/:id',
        name: 'productsListEdit',
        component: () =>
          import('@/views/products/productsList/productDetail/index'),
        hidden: true,
        meta: {
          title: '编辑商品',
          icon: 'el-icon-s-goods',
          activeMenu: '/products/productsList',
          isEdit: true
        }
      },
      {
        path: 'productsCategry',
        name: 'productsCategry',
        component: () => import('@/views/products/productsCategry/index'),
        meta: { title: '商品分类', icon: 'el-icon-menu' }
      },
      {
        path: 'brands',
        name: 'brands',
        component: () => import('@/views/products/brands/index'),
        meta: { title: '品牌管理', icon: 'el-icon-sell' }
      }
    ]
  },
  {
    path: '/orders',
    component: Layout,
    redirect: '/orders/address',
    name: 'orders',
    meta: { title: '订单管理', icon: 'el-icon-document' },
    children: [
      {
        path: 'address',
        name: 'address',
        component: () => import('@/views/orders/address/index'),
        meta: { title: '地址管理', icon: 'el-icon-place' }
      },
      {
        path: 'order/ordersList',
        name: 'ordersList',
        component: () => import('@/views/orders/ordersList/index'),
        meta: { title: '订单列表', icon: 'el-icon-s-order' }
      },
      {
        path: 'order/returnsList',
        name: 'returnsList',
        component: () => import('@/views/orders/returnsList/index'),
        meta: { title: '退单列表', icon: 'el-icon-s-release' }
      },
      {
        path: 'order/detail/:id',
        name: 'orderDetail',
        component: () => import('@/views/orders/ordersList/detail/index'),
        hidden: true,
        meta: {
          title: '订单详情',
          icon: 'el-icon-s-release',
          activeMenu: '/orders/order/ordersList'
        }
      },
      {
        path: 'order/returnDetail/:id',
        name: 'orderReturnDetail',
        component: () => import('@/views/orders/returnsList/detail/index'),
        hidden: true,
        meta: {
          title: '退单详情',
          icon: 'el-icon-s-release',
          activeMenu: '/orders/order/returnsList'
        }
      }
    ]
  },
  {
    path: '/members',
    component: Layout,
    redirect: '/members/manage',
    name: 'members',
    meta: { title: '注册用户管理', icon: 'el-icon-s-custom' },
    children: [
      {
        path: 'manage',
        name: 'manage',
        component: () => import('@/views/members/index'),
        meta: { title: '用户管理', icon: 'el-icon-user' }
      },
      { path: '' }
    ]
  },
  {
    path: '/homeRecommend',
    component: Layout,
    redirect: '/homeRecommend/homeRecommendList',
    name: 'homeRecommend',
    meta: { title: '营销管理', icon: 'el-icon-s-goods' },
    children: [
      {
        path: 'homeRecommendList',
        name: 'homeRecommendList',
        component: () =>
          import('@/views/homeRecommend/homeRecommendList/index'),
        meta: { title: '营销列表', icon: 'el-icon-s-marketing' }
      },
      {
        path: 'bannerList',
        name: 'bannerList',
        component: () => import('@/views/homeRecommend/bannerList/index'),
        meta: { title: '广告列表', icon: 'el-icon-s-flag' }
      }
    ]
  },
  {
    path: '/content',
    component: Layout,
    redirect: '/content/articleList',
    name: 'content',
    meta: { title: '内容管理', icon: 'el-icon-folder' },
    children: [
      {
        path: 'articleList',
        name: 'articleList',
        component: () => import('@/views/content/articleList/index'),
        meta: { title: '文章列表', icon: 'el-icon-document' }
      },
      {
        path: 'articleList/add',
        name: 'articleListAdd',

        component: () => import('@/views/content/articleList/Detail'),
        meta: {
          title: '新增文章',
          icon: 'el-icon-document',
          activeMenu: '/content/articleList'
        },
        hidden: true
      },
      {
        path: 'articleList/edit/:id',
        name: 'articleListEdit',
        component: () => import('@/views/content/articleList/Detail'),
        meta: {
          title: '编辑文章',
          icon: 'el-icon-document',
          activeMenu: '/content/articleList'
        },
        hidden: true
      },
      {
        path: 'materialList',
        name: 'materialList',
        component: () => import('@/views/content/materialList/index'),
        meta: { title: '素材列表', icon: 'el-icon-document-copy' }
      }
    ]
  },
  {
    path: '/personnal',
    component: Layout,
    redirect: '/personnal/articleList',
    name: 'personnal',
    meta: { title: '个人中心', icon: 'el-icon-user-solid' },
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('@/views/personnal/main/index'),
        meta: { title: '个人主页', icon: 'el-icon-user' }
      },
      {
        path: 'set',
        name: 'set',
        component: () => import('@/views/personnal/set/index'),
        meta: { title: '个人设置', icon: 'el-icon-setting' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
