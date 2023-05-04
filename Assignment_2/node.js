const express = require("express")
let app = express()
const fs = require("fs")

const port = 3000

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.get("/getData",function(req,res){
    res.sendFile(__dirname+"/data.json")
})

app.get("/index.js",function(req,res){
    res.sendFile(__dirname+"/index.js")
})


app.listen(port,()=>{
    console.log(`server running at ${port}`)
})