import Vue from 'vue'

import { 
    Button,
    Search,
    Tab,
    Tabs,
    Card,
    Tag,
    Field,
    Pagination,
    Icon,
    Form,
    Notify,
    Uploader

} from 'vant';


Vue.use(Button)
Vue.use(Search)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Card)
Vue.use(Tag)
Vue.use(Field)
Vue.use(Pagination)
Vue.use(Icon)
Vue.use(Form)
Vue.use(Uploader)

Vue.prototype.$notify = Notify