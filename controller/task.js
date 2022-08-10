const Task = require('../model/task')
const {createCustomError} = require('../errors/custom-error')


const getallTasks = async(req,res)=>{
    const task = await Task.find()
    res.status(201).json({task})
}

const getTask = async(req,res,next)=>{
    const {id:userId} = req.params
    const task = await Task.find({_id:userId})
    if(!task){
        return next(createCustomError(`No task with id:${userId}`,404))
    }
    res.status(201).json({task})
}

const createTask = async(req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(err){
        res.status(500).json({message:err})
    }
    
}

const updateTask = async(req,res,next)=>{
    const {id:userId} = req.params
    const task = await Task.findOneAndUpdate({_id:userId},req.body,{
        new:true,
        runValidators:true
    })
    if(!task){
        return next(createCustomError(`No task with id:${userId}`,404))
    }
    res.status(201).json({task})
}

const deleteTask = async(req,res)=>{
    const {id:userId} = req.params
    const task = await Task.findOneAndDelete({_id:userId})
    if(!task){
        return next(createCustomError(`No task with id:${userId}`,404))
    }
    res.status(201).json({task})
}


module.exports = {
    getallTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}