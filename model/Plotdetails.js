const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://dephin16:thejuspuli@cluster0.fxbesy7.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected1")})
.catch(err=>console.log(err));

const plotschema1=new mongoose.Schema(
    {
        pname:String,
        pprice:String,
        plocation:String,
        pcategory:String
    }
);
var plotmodel=mongoose.model("plot1",plotschema1)
module.exports=plotmodel;