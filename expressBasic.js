 const express = require('express');

 const app=express();

 app.get("/emp",(req,res) => {
     res.send("hello world from the express");
 });

 app.listen(8000,()=>{
     console.log("listening to port 8000");
 });