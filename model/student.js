import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String
})

//create the model
const Student = mongoose.model("students",studentSchema)
export default Student;