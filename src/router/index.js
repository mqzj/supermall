import {createRouter, createWebHistory} from 'vue-router'
const routerHistory = createWebHistory()

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/category',
    component: Category
  },
  {
    path:'/cart',
    component: Cart
  },
  {
    path:'/profile',
    component: Profile
  }
]

const router = createRouter({
  history: routerHistory,
  /*
   *   在这里和vue2一样写路由配置
  */
  routes
})

export default router
