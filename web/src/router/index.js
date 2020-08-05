import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeContent from '../components/HomeContent.vue'
import Article from '../components/Article.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Result from '../components/Result.vue'
import ArticleList from '../views/ArticleList.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/homecontent',
    children: [
      { path: '/homecontent', component: HomeContent },
      { path: '/article/list', component: ArticleList },
      { path: '/article/:id', component: Article, props: true },
      { path: '/login', component: Login },
      { path: '/register', component: Register },
      { path: '/result', component: Result },
    ]
  },
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
