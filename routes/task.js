const express = require('express')
const router = express.Router()
const taskController = require('../controller/task')

router.get('/',taskController.getallTasks)
router.post('/',taskController.createTask)


router.route('/:id')
.get(taskController.getTask)
.put(taskController.updateTask)
.delete(taskController.deleteTask)


module.exports = router