const db1=require("../models/register")

const Register=db1.register


exports.create=(req,res)=>{
    console.log(req.body); 
    
    const register= new Register({
        userName:req.body.userName,
        password:req.body.password,
        email:req.body.email,
        mobile:req.body.mobile
    })

    register.save(register)
    .then(data =>{
        res.send(data)
    })
}