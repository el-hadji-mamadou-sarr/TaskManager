const express = require('express');
const app =express();
const port =5000;
const tasks = require('./routes/tasks');
const connectDb = require('./db/connection');
require('dotenv').config();
//setting middlewares
//it parse the incoming request in req.body
app.use(express.json());
app.use('/api/v1/tasks',tasks);

const start = async ()=>{
    try{
        await connectDb(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`server listening at port ${port}`)});

    }catch(err){
        console.log(err);
    }
}

start();

