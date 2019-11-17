const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("Hello! this is a sample app")
})


app.get("/hi",(req,res)=>{
    res.send("Hi! " + req.query.name);
})

app.get("/bye",(req,res)=>{
    res.send("Good bye! " + req.query.name);
})

app.listen(6767,()=>{
    console.log("server is running");
})