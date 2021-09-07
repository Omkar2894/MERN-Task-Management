module.exports=mongoose=>{
    var schema=mongoose.Schema(
        {
            taskName: String,
            taskInfo: String
        }
    )
    const Tasks=mongoose.model("task", schema);
    return Tasks;
}