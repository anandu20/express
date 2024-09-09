const bodyParser=require("body-parser")
const express=require("express")
const app=express();
const PORT=3000;

app.use(bodyParser.urlencoded())
app.post("/",(req,res)=>{
    res.status(200).send("hello world")
})
app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
    
})