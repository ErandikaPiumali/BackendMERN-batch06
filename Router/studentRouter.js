import express from "express"
import Student from "../model/student.js"
import {createStudents,getStudents} from "../controllers/studentController.js"

const studentRouter = express.Router();

 studentRouter.get("/",getStudents) //created to the extra paths
 studentRouter.post("/",createStudents)

export default studentRouter; //connect to the main path