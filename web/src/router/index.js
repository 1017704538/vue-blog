import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeContent from '../components/HomeContent.vue'
import Article from '../components/Article.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/homecontent',
    children: [
      { path: '/homecontent', component: HomeContent },
      { path: '/article/:id', component: Article, props: true },
      { path: '/login', component: Login },
      { path: '/register', component: Register },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
