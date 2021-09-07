const db1Config= require("../../../config/db.config");

const mongoose=require('mongoose')

const db1={}

db1.mongoose=mongoose
db1.url=db1Config.url
db1.register=require("./register.model")(mongoose)

module.exports=db1