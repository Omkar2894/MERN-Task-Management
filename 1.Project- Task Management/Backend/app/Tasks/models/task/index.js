const dbConfig= require("../../../config/db.config");

const mongoose=require('mongoose')

const db={}

db.mongoose=mongoose
db.url=dbConfig.url
db.tasks=require("./task.model")(mongoose)

module.exports=db