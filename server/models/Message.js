const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    //内容
    content: { type: String },
    //时间
    date: { type: String },
    //评论人的用户id
    uid: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Message', schema)