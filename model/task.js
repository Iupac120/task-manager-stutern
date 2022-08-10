const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'provide this field']
    }
})

module.exports = new mongoose.model('task',taskSchema)