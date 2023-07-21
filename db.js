const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://sadequl:sadequl@cluster0.nwzzi6s.mongodb.net/Notebook?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;