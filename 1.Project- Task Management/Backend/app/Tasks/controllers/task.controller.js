const { query } = require("express");
const db=require("../models/task")

const Task=db.tasks

exports.create=(req,res)=>{
    console.log(req.body);

    const task= new Task({
        taskName:req.body.taskName,
        taskInfo:req.body.taskInfo
    })

    task.save(task)
    .then(data =>{
        res.send(data)
    })
}

exports.findAll=(req,res)=>{

    Task.find()     
       .then(data=>{
           res.send(data)
       })
}

exports.findSingle=(req,res)=>{
    var query=req.params.query;

    Task.findById(query)
    .then(data=>{
        res.send(data)
    })
}

exports.searchTask=(req,res)=>{
    var query=req.params.query 
    console.log(query);
    let arr= []
    Task.find({ $or: [
        {taskName:{ $regex : new RegExp(query), $options : '$i'  } },
        {taskInfo:{ $regex : new RegExp(query), $options : '$i'  } }
        ]
    }
    //  function(err, data){
    //     // console.log(data)
    //     // res.send(data); }
    ).then(data=> 
        {  
            
            data.map((curEle, index)=> {
                const{_id, taskName, taskInfo} = curEle;
                arr.push({value: _id, label:taskName});
                // arr.push({value: _id, label: taskName, label: taskInfo});
            });
            console.log(arr); 
            res.send(arr)
        })
    
    // Task.find({
    //     $text:{$search:query}
    // },function(err,result){
    //     if(result){
    //         res.json(result)
    //     }
    // })
  
}


exports.searchTable=(req,res)=>{
    var query=req.params.query 
    // console.log(query);
    Task.find({ $or: [
        {taskName:{ $regex : new RegExp(query), $options : '$i'  } },
        {taskInfo:{ $regex : new RegExp(query), $options : '$i'  } }
        ]
    },function(err, data){
        console.log(data)
        res.send(data); })
}


exports.updateTask=(req,res)=>{
    var query=req.params.query

    Task.findByIdAndUpdate( query, req.body, {new:true} )
        .then(data=>{
            res.send(data)
        })
}

exports.deleteTask=(req,res)=>{
    var query=req.params.query
    console.log(query);

    Task.findByIdAndDelete({_id: query})
    .then(data=>{
           res.send(data)
       })

}

