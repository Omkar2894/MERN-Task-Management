module.exports=app=>{

    const register=require("../controllers/register.controller");

    var router=require('express').Router()

    router.post("/register", register.create)

    app.use("/api", router)
}


