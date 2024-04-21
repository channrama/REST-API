const express=require("express")
const mongoose = require('mongoose');
server=express()

server.get('/',(req,res)=>{
    res.json({type:"get"})
})
server.post('/',(req,res)=>{
    res.json({type:"post"})
})
server.put('/',(req,res)=>{
    res.json({type:"put"})
})
server.delete('/',(req,res)=>{
    res.json({type:"delete"})
})
server.patch('/',(req,res)=>{
    res.json({type:"patch"})
})

mongoose.connect("mongodb+srv://dschannappa93:T0zvkZSXpAN9LLDM@data.qzxbeyw.mongodb.net/?retryWrites=true&w=majority&appName=data")
.then(()=>{
    console.log("database is connected")
})
.catch(()=>{
    console.log("ERROR !!data base is not connected") 
})
server.listen(8080,()=>{
    console.log("server started port 8080");
});