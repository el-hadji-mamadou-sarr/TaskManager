const Task = require('../models/Task')
const getTasks = async (req,res)=>{
    try{
        const tasks = await Task.find({});
        res
            .status(200)
            .json({tasks});
    }catch (e) {
        res
            .status(500)
            .json({mess:e})
    }
}
const getTask = async (req,res)=>{

    const taskId = req.params.id;
    try{
        const task = await Task.findOne({_id:taskId});

        //always put a return in an if
        if(!task){
            return res.status(404).json({mess:'could not find task'})
        }
        res.status(200).json({task});
    }catch (e) {
        res.status(500).json({mess:e});
    }
}
const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body);
        //successful post status=201
        res
            .status(201)
            .json({task});
    }catch (err){
        //server error
        res
            .status(500)
            .json({mess:err})
    }
}
    const updateTask = async (req,res)=>{
       const taskId = req.params.id;
       try{
           const task = await Task.findOneAndUpdate({_id:taskId},req.body,{
               new:true,
               runValidators:true
           })

           if(!task){
               return res.status(404).json('could not find task');
           }
           res.status(200).json({task});
       }catch (e) {
            res.status(500).json({mess:'server error'});
       }
}
const deleteTask = async (req,res)=>{
    const taskId = req.params.id;
    try{
        const task = await Task.findOneAndDelete({_id:taskId});

        if(!task){
            return res.status(404).json({mess:'cannot find task'});
        }
        res.status(200).json({task});
    }catch (e) {
        res.status(500).json({mess:'server error'});
    }
}
module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}