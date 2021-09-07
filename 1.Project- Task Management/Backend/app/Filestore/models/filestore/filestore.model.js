module.exports=mongoose=>{
    var schema=mongoose.Schema(
        {
            images: String
        }
    ) 
    const Filestore= mongoose.model("filestores", schema);
    return Filestore;
}