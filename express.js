// const express = require('express')

// const app = express()

// app.get('/', (req,res)=>{
//     res.send("Hello world!");
// });

// app.listen(1000);

//MiddleWare

var express=require('express')
var app=express()

var myLogger =function(req,res,next){
    console.log("LOGGED")
    next()
}

app.use(myLogger)

app.get('/',function (req,res){
    res.send('Hello World!')
})

app.listen(1000)