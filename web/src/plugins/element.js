import Vue from 'vue'
import {
    Button,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Menu,
    Submenu,
    MenuItem,
    Card,
    Popover,
    Input,
    Form,
    FormItem,
    Upload,
    Message,
    MessageBox,
    Pagination,
    Collapse,
    CollapseItem,
    Tag,

} from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Card)
Vue.use(Popover)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Upload)
Vue.use(Pagination)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Tag)

// 挂载到Vue原型对象上
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
