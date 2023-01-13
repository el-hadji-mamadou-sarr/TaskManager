const mongoose = require('mongoose');




mongoose.set('strictQuery', false);

const connectDb = (url)=>{
    return mongoose
        .connect(url)
        .then(()=>console.log('connected to mongodb'))
        .catch((err)=>console.log(err));
}

module.exports = connectDb;

//if we have in a module a function that is executed so we don't need a export module
//we just import the module