const { model } = require("mongoose");
module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const Article = require('../../models/Article')
    const User = require('../../models/User')
    //文章详情
    router.get('/article/:id', async (req, res) => {
        const data = await Article.findById(req.params.id).populate('tagid')
        res.send(data)
    })
    //头像上传
    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.post('/web/api/upload', upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
    //用户注册
    router.post('/user/create', async (req, res) => {
        const data = await User.create(req.body)
        res.send(data)
    })
    //用户登录
    app.post('/web/api/login', async (req, res) => {
        const { username, password } = req.body
        // 1.根据用户名找用户

        const user = await User.findOne({ username }).select('+password')
        assert(user, 422, '用户不存在')

        // 2.校验密码
        const isValid = require('bcrypt').compareSync(password, user.password)
        assert(isValid, 422, '密码错误')

        // 3.返回token
        const token = jwt.sign({ id: user._id }, app.get('secret'))
        res.send({ token })
    })
    app.use('/web/api', router)
}