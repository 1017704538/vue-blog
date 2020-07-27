import Vue from 'vue'
import {
    Button,
    Container,
    Header,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItem,
    RadioGroup,
    RadioButton,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Table,
    TableColumn,
    Message,
    MessageBox,
    Tag,
    Upload,
    Pagination,
    Switch,
    Radio

} from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Main)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Tag)
Vue.use(Upload)
Vue.use(Pagination)
Vue.use(Switch)
Vue.use(Radio)

// 挂载到Vue原型对象上
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm