
module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Article = require('../../models/Article')
    const Tag = require('../../models/Tag')
    const Comment = require('../../models/Comment')

    //文章列表
    router.get('/article/list', async (req, res) => {
        const data = await Article.find().populate('tagid')
        res.send(data)
    })
    //标签列表
    router.get('/tag/list', async (req, res) => {
        const data = await Tag.find().populate('aid')
        res.send(data)
    })
    //评论列表
    router.get('/comment/list', async (req, res) => {
        const data = await Comment.find().populate('uid')
        res.send(data)
    })
    //标签列表分页
    // router.get('/tag/list', (req, res) => {
    //     console.log(req.body)
    //     var pagenum = Number(req.query.pagenum || 1) // 当前页码 如果没有传值，默认为1
    //     var limit = Number(req.query.pagesize || 5) //每页显示数据条数 如果没有传值，默认为5
    //     var pages = 1 //总页数
        

    //     Tag.count().then(async (count) => {
    //     // 计算总页数，向上取整数,去最大值
    //     pages = Math.ceil(count / limit)

    //     // 页数取值不能超过总页数的值
    //     pagenum = Math.min(pagenum, pages)

    //     // 取值不能小于1
    //     pagenum = Math.max(pagenum, 1)

    //     var skip = (pagenum - 1) * limit      

    //     const data = await Tag.find().limit(limit).skip(skip)

    //     res.send(data)
    //     })       
    // })

    app.use('/admin/api', router)
}