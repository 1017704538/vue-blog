module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Article = require('../../models/Article')
    const Tag = require('../../models/Tag')
    router.get('/article/list', async (req, res) => {
        const data = await Article.find().populate('tagid')
        res.send(data)
    })

    app.use('/admin/api', router)
}