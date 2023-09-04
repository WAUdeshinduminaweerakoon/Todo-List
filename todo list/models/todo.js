const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo:{
        type : String,
        required : true,
    }
})

const todo = mongoose.model("todo-list",todoSchema);
module.exports = todo;