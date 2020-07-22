module.exports = app => {
    const express = require('express')
    const router = express.Router()
    // 创建资源
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    // 更新资源
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    // 删除资源
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success: true
        })
    })
    // 资源列表
    router.get('/', async (req, res) => {
        const queryOptions = {}
        // if (req.Model.modelName === 'Category') {
        //     queryOptions.populate = 'parent'
        // }
        const items = await req.Model.find().setOptions(queryOptions).limit(100)
        res.send(items)
    })
    // 资源详情
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    //中间件
    const resourceMiddleware = require('../../middleware/resource')
    app.use('/admin/api/rest/:resource', resourceMiddleware(), router)

    const multer = require('multer')
    const upload = multer({dest: __dirname + '/../../uploads'})
    app.post('/admin/api/upload',upload.single('file'), async(req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
}