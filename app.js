const express=require('express');
const app=express(); 
app.get("/",(req,res)=>{
     
    res.sendfile(__dirname+"/home.html")
})
app.get("/area",(req,res)=>{
     
    res.sendFile(__dirname+"/areaform.html");


}) 
app.get("/rectangle",(req,res)=>{
     
    res.sendFile(__dirname+"/rectangle.html");


})  
app.get("/triangle",(req,res)=>{
     
    res.sendFile(__dirname+"/triangle.html");


})


module.exports=app