const path=require("path")
const express=require("express")
const app=express();
const PORT=3000;
// app.use(express.static("template")) // used to load a page without using get methd
// app.use(express.json())   // load a page without using body parser
app.get("/",(req,res)=>{
    console.log(req.body);
    res.status(200).sendFile(path.join(__dirname,"template","index.html"));
    
  
})
app.get("/about",(req,res)=>{
   

    res.status(201).sendFile(path.join(__dirname,"template","about.html"));

})

app.get("/contact",(req,res)=>{

    res.status(202).sendFile(path.join(__dirname,"template","contact.html"));
   
   })
   

app.get("*",(req,res)=>{

 res.status(404).sendFile(path.join(__dirname,"template","error.html"));

})
// app.get("/",Token,(req,res,next)=>{
//     console.log("home");
//     res.send("hello World");
        

// })
// function Token(req,res,next){
//     console.log("middle ware");
//     next();
// }


app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
    
})