const express = require("express");
const { create } = require("./inputTypes");
const { update } = require("./inputTypes");
const { todo } = require("./db")
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res)=>{
    const createPayload = req.body;
    const parsedPayload= create.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "Invalid Todo"
        });
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });
    res.json({
        msg:"Todo created"
    })
});

app.get('/todos', async (req, res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
});

app.put('/completed', async (req, res)=>{
    const updatePayload = req.body;
    const parsedUpdatedPayload = update.safeParse(updatePayload);
    if(!parsedUpdatedPayload.success){
        res.status(404).json({
            message:"Invalid id"
        });
        return;
    }
    await todo.findOneAndUpdate({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        message: "Updated"
    })
})



const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`App listening to port ${PORT}`)
});