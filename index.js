const express=require("express")
const cors=require("cors")
const multer=require('multer');
const storage=multer.memoryStorage();
const upload=multer({storage:storage});
// const CategoryRouter = require('./routes/Categoryroutes')
// const SubcateRouter = require('./Routes/Subcateroutes')
// const db = require("./Connection/Database")



const app=new express();

const plotmodel=require('./model/Plotdetails')

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());



// app.use("/c", CategoryRouter)

// app.use("/s", SubcateRouter)


app.get('/',(request,response)=>{
    response.send("hai")

})

app.post('/new1',(request,response)=>{
    console.log(request.body)
    new plotmodel(request.body).save();
    response.send("Save")
});


app.listen(4005,(request,response)=>{
    console.log("port is running in 4005")

})