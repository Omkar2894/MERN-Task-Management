module.exports=app=>{

    const task=require("../controllers/task.controller");

    var router= require('express').Router()

    router.post("/addtask", task.create)

    router.get("/getalltasks", task.findAll)

    router.get("/getsingletask/:query", task.findSingle);

    router.get("/searchdata/:query", task.searchTask);

    router.get("/searchtable/:query", task.searchTable);

    router.put("/updatetask/:query", task.updateTask);

    router.delete("/deletetask/:query", task.deleteTask);

    app.use("/api", router)
}