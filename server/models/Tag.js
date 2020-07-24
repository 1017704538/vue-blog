const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    date: { type: String },
    // num: { type: Number },
    aid: { type: mongoose.SchemaTypes.ObjectId, ref: 'Article' }
    ,
})

module.exports = mongoose.model('Tag', schema)