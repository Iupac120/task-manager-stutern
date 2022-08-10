const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'must provide a name'],
        trim:true,
        maxlength:[20,'name must not be more than 20 characters']
    },completed: {
        type:Boolean,
        default: false
    }
})

module.exports = new mongoose.model('task',taskSchema)