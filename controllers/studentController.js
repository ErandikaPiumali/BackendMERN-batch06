import Student from "../model/student.js"


export  function getStudents(req,res){
    Student.find().then(
        (students)=>{ // get the input of find()
 res.json(students) // return the input to frontend
        }
    ).catch(
        ()=>{
            res.json({
                message:"Failed to fetch students"
            })
        }
    )
   
}

export function createStudents(req,res){
    Student.find().then(
        (students)=>{ // get the input of find()
 res.json(students) // return the input to frontend
        }
    ).catch(
        ()=>{
            res.json({
                message:"Failed to fetch students"
            })
        }
    )
   
}


