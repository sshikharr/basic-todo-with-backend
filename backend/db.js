const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://shikhar_dwivedi:aWLAnznvdTgsww0y@cluster0.e5dlnhf.mongodb.net/my-todo-app')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}