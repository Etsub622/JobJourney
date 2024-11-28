import mongoose from "mongoose";

const parentSchema = new mongoose.Schema({
      
    FullName:{
        type: String,
        required:true
    },
    
    Email: {
        type: String,
        required:true
    },
    PhoneNumber: {
        type: Number,
        required:true
    },
    Password: {
        type: String,
        required:true
    }
    
})


const Parent = mongoose.model("Parent", parentSchema)

export {Parent}