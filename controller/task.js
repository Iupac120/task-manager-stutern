

const getallTasks = async(req,res)=>{
    res.status(201).send('getall')
}

const getTask = async(req,res)=>{
    res.status(201).send('get single')
}

const createTask = async(req,res)=>{
    res.status(201).send('create task')
}

const updateTask = async(req,res)=>{
    res.status(201).send('put task')
}

const deleteTask = async(req,res)=>{
    res.status(201).send('getall')
}


module.exports = {
    getallTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}