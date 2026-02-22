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
   console.log(req.body);
 if(req.user==null){
    res.status(403).json({
        message:"Please login to create a user"
    })
    return;
 }
 if(req.user.role!="admin"){
    res.status(403).json({
        message:"Please login as admin"
    })
    return;
 }

    const student = new Student({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
    });

    student.save()
    .then(
        ()=>{ // get the input of find()
 res.json({
    message:"students created successfully"
 }) // return the input to frontend
        }
    ).catch(
        ()=>{
            res.json({
                
                message:"Failed to fetch students"
            })
        }
    )
   
}


