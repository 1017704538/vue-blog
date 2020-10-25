import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'
// import HomeContent from '../components/HomeContent.vue'
const Home = () => import(/* webpackChunkName: "home_homecontent" */ '../views/Home.vue')
const HomeContent = () => import(/* webpackChunkName: "home_homecontent" */ '../components/HomeContent.vue')

// import Article from '../components/Article.vue'
const Article = () => import(/* webpackChunkName: "article" */ '../components/Article.vue')

// import Login from '../components/Login.vue'
// import Register from '../components/Register.vue'

const Login = () => import(/* webpackChunkName: "login_register" */ '../components/Login.vue')
const Register = () => import(/* webpackChunkName: "login_register" */ '../components/Register.vue')

// import Result from '../components/Result.vue'
const Result = () => import(/* webpackChunkName: "result" */ '../components/Result.vue')

// import ArticleList from '../views/ArticleList.vue'
const ArticleList = () => import(/* webpackChunkName: "ArticleList" */ '../views/ArticleList.vue')

// import PhotoWall from '../views/PhotoWall.vue'
const PhotoWall = () => import(/* webpackChunkName: "PhotoWall" */ '../views/PhotoWall.vue')

// import TagWall from '../views/TagWall.vue'
const TagWall = () => import(/* webpackChunkName: "TagWall" */ '../views/TagWall.vue')

// import MessageBoard from '../views/MessageBoard.vue'
const MessageBoard = () => import(/* webpackChunkName: "MessageBoard" */ '../views/MessageBoard.vue')

// import Mhome from '../mviews/Mhome.vue'
const Mhome = () => import(/* webpackChunkName: "Mhome" */ '../mviews/Mhome.vue')
const homeCard = () => import(/* webpackChunkName: "Mhome" */ '../mviews/homeCard.vue')

const mArticleList = () => import(/* webpackChunkName: "mArticle" */ '../mviews/ArticleList.vue')

const mArticle = () => import(/* webpackChunkName: "Article" */ '../mviews/Article.vue')

const File = () => import(/* webpackChunkName: "File" */ '../mviews/File.vue')

const Message = () => import(/* webpackChunkName: "Message" */ '../mviews/Message.vue')

const mResult = () => import(/* webpackChunkName: "mResult" */ '../mviews/Result.vue')

const mLogin = () => import(/* webpackChunkName: "mLogin_mRegister" */ '../mviews/Login.vue')
const mRegister = () => import(/* webpackChunkName: "mLogin_mRegister" */ '../mviews/Register.vue')


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
      { path: '/photo', component: PhotoWall },
      { path: '/tag', component: TagWall },
      { path: '/message', component: MessageBoard },

      { path: '/article/:id', component: Article, props: true },
      { path: '/login', component: Login },
      { path: '/register', component: Register },
      { path: '/result', component: Result },
    ]
  },
  {
    path: '/m',
    name: 'mHome',
    component: Mhome,
    redirect: '/homeCard',
    children: [
      { path: '/homeCard', component: homeCard },
      { path: '/mArticle/list', component: mArticleList },
      { path: '/file', component: File },
      { path: '/file', component: File },
      { path: '/mMessage', component: Message },
      { path: '/mArticle/:id', component: mArticle, props: true },
      { path: '/mResult', component: mResult },
      { path: '/mLogin', component: mLogin },
      { path: '/mRegister', component: mRegister },
    ]
  }
]


const router = new VueRouter({
  routes
})


export default router
