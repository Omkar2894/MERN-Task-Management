const db = require("../models/filestore")

const Filestore=db.filestore

exports.create=(req,res)=>{
    console.log(req.body);

    const filestore= new Filestore({
        images:req.body.images
    
    })
    filestore.save(filestore)
    .then(data =>{
        res.send(data)
    })

}


