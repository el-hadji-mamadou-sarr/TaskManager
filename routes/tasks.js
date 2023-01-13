const express = require('express');
const router = express.Router();
const {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks');


router.route('/').get(getTasks).post(createTask);
router.route('/:id').patch(updateTask).delete(deleteTask).get(getTask);

module.exports = router;
