import express from 'express'
import path from 'path'
let app=express()
app.get("/",(req,resp)=>{
    resp.send("Root,Req")
})
app.get("/users",(req,resp)=>{
    resp.send("Root,Req")
})
app.get("/index",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"index.html"))
})
    app.listen(8080,'127.0.0.1',(err)=>{
        if(err)throw err
        console.log(`server is running  ..http://127.0.0.1:8080`)
    
    })
