module.exports=app=>{

const multer= require('multer');
const fs= require('fs')
const path =require('path')

const fileuploads= multer.diskStorage({
    destination:(req, file, callback) =>{
        const uploadDir = path.join(__dirname, '..','..', 'Stored Files')
        // fs.mkdirSync(uploadDir)
        callback(null, uploadDir);
    },
    filename: (req, file, callback) =>{
        // callback(null, file.fieldname+ '-' + file.originalname);
        callback(null,  file.originalname);
    },
})

const upload= multer({storage: fileuploads})

const fileupload= require('../controllers/filestore.controller')

var router=require('express').Router()

router.post("/upload", upload.single("file"), fileupload.create )

app.use("/api", router)

}