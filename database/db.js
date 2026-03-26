const mongoose = require("mongoose")

const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/projects')
        console.log('mongoDB Connect Successfull !!')
    }catch(err){
        console.log('mongoDB Connect Successfull !!')
        console.log(err)
    }
}

module.exports=connectDB;