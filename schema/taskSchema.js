const mongoose = require("mongoose");

const mySchema = new mongoose.Schema({
    title: String,
    discription : String
})

const collection = mongoose.model('lists',mySchema)

module.exports=collection;