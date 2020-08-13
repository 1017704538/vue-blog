import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import TagEdit from '../components/TagEdit.vue'
import TagsList from '../components/TagsList.vue' 
import ArticleEdit from '../components/ArticleEdit.vue'
import ArticleList from '../components/ArticleList.vue'
import UserList from '../components/UserList.vue'
import UserEdit from '../components/UserEdit.vue'
import CommentList from '../components/CommentList.vue'
import PhotoAdd from '../components/PhotoAdd.vue'
import PhotoList from '../components/PhotoList.vue'

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

      { path: '/users/list', component: UserList },
      { path: '/users/edit/:id', component: UserEdit, props: true },

      { path: '/comments/list', component: CommentList },

      { path: '/photos/add', component: PhotoAdd },
      { path: '/photos/list', component: PhotoList },

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
