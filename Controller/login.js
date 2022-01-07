const {generateAccessToken}=require('../auth/jwt')
const knex=require("../models/database.js")
exports.login=(req,res)=>{
        if (req.body.userName==undefined || req.body.password==undefined){
            res.send({message:"user name or password undefind"})
        }else{
            knex.select("*").from('users').where('userName',req.body.userName).then((data)=>{
                console.log("*****************");
                console.log(data);
                if (data[0].password===req.body.password){
                    const user={id:data[0].id,name:data[0].name,userName:data[0].userName}
                    const token=generateAccessToken(user)
                    console.log('successfull login')
                    res.cookie("token",token)
                    res.send({message:"login succesfuly"});
                }else{
                    res.send({message:"Invalid password or Email"})
                }
            
            }).catch((err)=>{
                res.send(err)
            })
        }
}

