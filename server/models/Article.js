const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    // 文章id
    aid: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Article' }],
    //标题
    title: { type: String },
    //简介
    introduction: { type: String },
    //封面
    cover: { type: String },
    //内容(markdown)
    body: { type: String },
    //html
    content: { type: String },
    //所含标签
    tags: { type: String },
    //标签id
    tagid: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Tag' }
    ],
    //更新日期
    date: { type: String },
    //点击量
    click: {type: Number},
    //评论
    comment: { type: String }
})

module.exports = mongoose.model('Article', schema)