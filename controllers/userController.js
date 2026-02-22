import User from "../model/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv  from "dotenv";
dotenv .config();


   export function createUser(req,res){

    const passwordHash = bcrypt.hashSync(req.body.password,10)//1-generate hash

  //  const user = new User(req.body) // created a user - object
  const userData={
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password: passwordHash,
    phone: req.body.phone,

   
  }
 
  const user=new User(userData) // create the new object

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
    //safety check
    if(!req.body){
          return res.status(400).json({
            message:"Request body is missing"
        });
    }
    const email=req.body.email
    const password=req.body.password

    User.findOne({
        email:email
    })
    .then(
        (user)=>{
            if(user==null){
                res.status(404).json({
                    message:"User not found"
                });
                return;
            }else{
                const isPasswordCorrect = bcrypt.compareSync(password,user.password);

                if (isPasswordCorrect){
                     const token = jwt.sign( // create the token
    {
        email:user.email,//user information/payload
        firstName:user.firstName,
        lastName:user.lastName,
        role:user.role,
        isBlocked:user.isBlocked,
        isemailVerified:user.isemailVerified,
        image:user.image
        
    }, process.env.JWT_SECRET//key
);
 res.json({
        token:token,
        message:"Login successful"
    })
}
else{ 
    res.status(403).json({
        message:"Incorrect Password"
    })
}

          //  console.log(user)
            //console.log(User)- this print the whole schema
}
}
    )
}

export function isAdmin(req){
    if(req.user==null){
        return false;
    }
    if(req.user.role =="admin"){
        return true;
    }else{
        return false;
    }
}

