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
    Todo.find()
    .then(result => {
        response.render("index",{data:result})
        console.log(result)
    })
})
// const post = 20;

app.post("/",(request,response)=>{
    console.log("fgyh");
    const todo = new Todo({
       todo : request.body.todoValue
    })
    todo.save()
    .then(result =>{
       response.redirect("/"); 
    })
})

app.delete("/:id",(request, response)=>{
    Todo.findByIdAndDelete(request.params.id)
    .then(result =>{
        console.log(result)
    })
})

app.listen(port, () =>{
    console.log("server is running on port " + port)
})
