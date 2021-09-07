module.exports=mongoose=>{
    var schema=mongoose.Schema(
        {
            userName: String,
            password: String,
            email: String,
            mobile: Number
        }
    ) 
    const Register= mongoose.model("register", schema);
    return Register;
}