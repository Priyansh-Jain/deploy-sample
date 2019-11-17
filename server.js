const express = require('express')
const app = express()

const PORT = process.env.PORT || 6767

app.get("/",(req,res)=>{
    res.send("Hello! this is a sample app")
})


app.get("/hi",(req,res)=>{
    res.send("Hi! " + req.query.name);
})

app.get("/bye",(req,res)=>{
    res.send("Good bye! " + req.query.name);
})

app.listen(PORT,()=>{
    console.log("server is running " + PORT);
})