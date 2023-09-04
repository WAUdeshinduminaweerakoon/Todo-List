const bodyParser = require("body-parser");
const express = require("express")
const app = express()
//const badyParser = require("bady-parser")
const mongoose = require("mongoose")

const port = 3000

app.set("view engine", "ejs"); 
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
  

const dburl ="mongodb://localhost:27017/tododb"

app.get("/", (request, response) =>{
    response.render("index")
})
// const post = 20;

app.listen(port, () =>{
    console.log("server is running on port " + port)
})