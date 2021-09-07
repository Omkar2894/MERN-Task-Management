const express=require('express')

const port= 8787

const cors=require('cors')

const app=express()

let corsOptions={
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions))

app.use(express.json())

const db1=require("./app/Register/models/register")
// const db=require("./app/Tasks/models/task")
//const db=require("./app/Filestore/models/filestore")
db1.mongoose
    .connect(db1.url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(()=>{
            console.log("Connected to database...");     
        })

require("./app/Register/routes/register.route")(app)

const db=require("./app/Tasks/models/task")
db.mongoose
    .connect(db.url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(()=>{
            console.log("Connected to database...");     
        })

 require("./app/Tasks/routes/task.route")(app)
//require("./app/Filestore/routes/filestore.routes")(app)


app.listen(port, ()=>{
    console.log(`Server start at ${port}`);
})