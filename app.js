// const path=require("path")
// const express=require("express")
// const app=express();
// const PORT=3000;
// app.use(express.static("template")) // used to load a page without using get methd
// app.use(express.json())   // load a page without using body parser
// app.get("/",(req,res)=>{
//     console.log("home");
//     res.send("hello world")
    
    // console.log(req.body);
//     res.status(200).sendFile(path.join(__dirname,"template","index.html"));
    
  
// })
// app.get("/about",(req,res)=>{
   

//     res.status(201).sendFile(path.join(__dirname,"template","about.html"));

// })

// app.get("/contact",(req,res)=>{

//     res.status(202).sendFile(path.join(__dirname,"template","contact.html"));
   
//    })
   

// app.get("*",(req,res)=>{

//  res.status(404).sendFile(path.join(__dirname,"template","error.html"));

// })
// app.get("/about/:id",(res,req)=>{
//     const {id}=req.params
//         console.log(id);
//         res.status(201).send("About")
        
// })
// app.get("/",Token,(req,res,next)=>{
//     console.log("home");
//     res.send("hello World");
        

// })
// function Token(req,res,next){
//     console.log("middle ware");
//     next();
// }


// app.listen(PORT,()=>{
//     console.log(`server started at http://localhost:${PORT}`);
    
// })



// const express=require("express")
// const app=express();
// const PORT=3000;
// app.use(express.json())   // load a page without using body parser
// app.get("/",(req,res)=>{
//     console.log("home");
//     res.send("hello world")
// })
// app.get("/about/:id",(res,req)=>{
//     const {id}=req.params
//         console.log(id);
//         res.status(201).send("About")
        
// })

// app.listen(PORT,()=>{
//     console.log(`server started at http://localhost:${PORT}`);
    
// })

// const express=require("express")
// const app=express();
// const PORT=3000;
// app.use(express.json())   // load a page without using body parser
// app.get("/",(req,res)=>{
//     console.log("home");
//     res.send("hello world")
// })
// app.get("/about",(req,res)=>{
//     const {username,age}=req.query;
//     console.log(username,age);
    
//         res.status(201).send("About");
        
// });

// app.listen(PORT,()=>{
//     console.log(`server started at http://localhost:${PORT}`);
    
// })


// const DB_NAME="BATCH"
// const DB_URL="mongodb://127.0.0.1:27017/"
// const mongoose=require("mongoose")
// const express=require("express")
// const app=express();
// const PORT=3000;
// app.use(express.json())   // load a page without using body parser
// app.get("/",(req,res)=>{
//     console.log("home");
//     res.send("hello world")
// });
// mongoose.connect(DB_URL+DB_NAME).then(()=>{
//     console.log("mongodb connected");
//     app.listen(PORT,()=>{
//         console.log(`server started at http://localhost:${PORT}`);
        
//     });
    
// }).catch((error)=>{
//     console.log(error);
    
// })


import express from "express";
import connection from "./connection.js";
import env from "dotenv";
import router from './router.js'
env.config();

const app=express();

app.use("/api",router)
connection()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server started");
        
    });
})
.catch((error)=>{
    console.log(error);
    
})

