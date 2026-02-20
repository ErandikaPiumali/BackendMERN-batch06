import User from "../model/users.js";
import bcrypt from "bcrypt";

export function createUser(req,res){

  //  const user = new User(req.body) // created a user - object
  const userData={
    firstName:req.body.firstName,
    lastName:rea.body.lastName,
    email:req.body.email,
    password: passwordHash,
    phone: req.body.phone,

   
  }
 const passwordHash = bcrypt.hashSync(req.body.password,10)
  const user=new User(userData) // create the object

    user.save().then(
        ()=>{
            res.json({
                message:"User created successfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message:"Failed to create a user"
            })
        }
    )

}

export function loginUser(req,res){
    const email=req.body.email
    const password=req.body.password

    User.findOne({
        email:email
    }).then(
        (user)=>{
            if(user==null){
                res.status(404).json({
                    message:"User not found"
                });
                return;
            }else{
                const isPasswordCorrect = bcrypt.compareSync(password,user.password)
                if (isPasswordCorrect){
                    res.json({
                        message:"Login Successful"
                    })
                }else{
                    res.status(403).json({
                        message:"Incorrect password"
                    })
                }
            }

            console.log(user)
            //console.log(User)- this print the whole schema
        }
    )

}