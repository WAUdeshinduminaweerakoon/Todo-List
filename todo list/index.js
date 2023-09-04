const express = require("express")
const app = express()
//const badyParser = require("bady-parser")
const mongoose = require("mongoose")

const port = 3000

app.set("view engine", "ejs"); 

app.get("/", (request, response) =>{
    response.render("index")
})
// const post = 20;

app.listen(port, () =>{
    console.log("server is running on port " + port)
})