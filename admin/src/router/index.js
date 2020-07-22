import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import TagEdit from '../components/TagEdit.vue'
import TagsList from '../components/TagsList.vue' 
import ArticleEdit from '../components/ArticleEdit.vue'
import ArticleList from '../components/ArticleList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },

      { path: '/tags/create', component: TagEdit },
      { path: '/tags/edit/:id', component: TagEdit, props: true },
      { path: '/tags/list', component: TagsList },
      
      { path: '/articles/create', component: ArticleEdit },
      { path: '/articles/edit/:id', component: ArticleEdit, props: true },
      { path: '/articles/list', component: ArticleList },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
