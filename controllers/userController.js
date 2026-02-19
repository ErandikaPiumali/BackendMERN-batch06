import User from "../model/users.js";

export function createUser(req,res){

    const user = new User(req.body) // created a user - object
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