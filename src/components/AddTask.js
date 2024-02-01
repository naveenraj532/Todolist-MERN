import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"

function AddTask() {
    
    const [todoList, setTodoList] = useState([])
    const [task, setTask] = useState("")
    const [status, setStatus] = useState("")
    const [deadline, setDeadline] = useState("")

    useEffect(() =>{
        axios.get('http://localhost:4000//getTask')
        .then(result => {
            setTodoList(result.json())
        })
        .catch((error) => {
            console.error("Unable to fetch task")
        })
    },[])

    const addTask = (event) => {
       
        event.preventDefault();
        if(!task || !status || !deadline)
        {
            alert("All fields must be filled");
            return
        }
        axios.post("http://localhost:4000//addTask", {task:task, status:status, deadline:deadline})
        .then(res => {
            console.log(res);
            window.location.reload()
        })
        .catch(err => console.log(err));
    }

    return(
        <>
          <h2>Add Your Task</h2>
          <form>
            Task : <input type="text" placeholder="Enter the task name" onChange={(event) => setTask(event.target.value)} /><br></br>
            Status : <select onChange={(event) => setStatus(event.target.value)}><option>Completed</option><option>Ongoing</option><option>Pending</option></select><br></br>
            Deadline : <input type="datetime-local" placeholder="Enter the task name" onChange={(event) => setDeadline(event.target.value)}/><br></br>
            <button onClick={addTask}>Add</button>
          </form>
        </>
        
    )
}

export default AddTask;