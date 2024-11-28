import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
    
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

const Tutor = mongoose.model('Tutor', tutorSchema);

export { Tutor };
 


    
