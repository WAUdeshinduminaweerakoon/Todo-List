const bodyParser = require("body-parser");
const express = require("express")
const app = express()

const mongoose = require("mongoose")
const Todo = require("./models/todo")

const port = 3000

app.set("view engine", "ejs"); 
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
  

const dburl ="mongodb+srv://udeshidumina:Wui1234@cluster0.lpriwsy.mongodb.net/";
mongoose.connect(dburl,{useNewUrlParser:true, useUnifiedTopology:true})

app.get("/", (request, response) =>{
    console.log("fgyh");
    response.render("index")
})
// const post = 20;

app.post("/",(request,response)=>{
    console.log("fgyh");
    const todo = new Todo({
       todo : "testing" 
    })
    todo.save()
    .then(result =>{
       response.redirect("/"); 
    })
})

app.listen(port, () =>{
    console.log("server is running on port " + port)
})
