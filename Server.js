const express = require("express")
const mongoose = require("mongoose")
const TodoModel = require("./models/Todo")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://0.0.0.0:27017/TodoList")
.then(() => {

    console.log("Connected to MongoDB")
})
.catch((err) => {

    console.error("Error in connecting to mongoDB")
})

app.post("/addTask", async (req,res) => {

    const task = req.body;
    const newTask = new TodoModel(task);
    await newTask.save();
    res.json(task);
})

app.get("/getTask", async(req, res) => {
    try {
        const result = await TodoModel.find({});
        res.json(result);
    }
    catch(error){

        console.error("promise failed");
    }
    
})

app.delete("/delTask/:id", async(req,res) => {

    const taskId = req.params.id;
    const result = await TodoModel.find({});
    TodoModel.findByIdAndDelete({_id:id})
    .then(() => {

        res.json(result)
    })
    .catch((err) => {

        console.error("Item not found")
    })
})

app.post("/updatetask/:id", async(req,res) => {

    const id = req.params.id;
    const result = await TodoModel.find({});
    const updata = req.body
    TodoModel.findByIdAndUpdate(id, updata)
    .then(() => {

        res.json(result)
    })
})

app.listen(4000, () => {
    console.log("Server is running on port 4000")
})