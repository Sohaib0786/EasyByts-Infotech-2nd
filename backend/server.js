require("dotenv").config({

}) 
 
 
 

const {PUBLIC_DATA}=require("./constant");
const app=require("./src/app");
const { ConnectDB } = require("./src/config/db.config");
ConnectDB();

 
 app.get("/",(req,res)=>{
    res.send("this is a root route");
 })
 
/*
 app.get("/hello",(req,res)=>{
    res.send("hello world I am learning mern stack");
 })

 */

 app.listen(PUBLIC_DATA.port,()=>{
    console.log(`the app is listening at port http://localhost:${PUBLIC_DATA.port}`);
 })

