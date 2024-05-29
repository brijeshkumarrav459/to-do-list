import React, { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import "./todo.css";
const Todo = () => {
  const arr = new Array(10).fill(0);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (task === "") {
      alert("please Eneter the Task first");
      return;
    }
    setTasks((prev) => [...prev, task]);
    setTask("");
  };



  const deleteHandler = (index) => {
    const newTasks = tasks.filter((t, i) => i !== index);
    setTasks(newTasks);
  };
  
  return (
    <div className="todo">
      <div className="todo_head">
        <h1>My To Do List</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title ...."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input type="submit" value={"Add"} />
        </form>
      </div>

      <div className="tasks">
        {tasks.map((task, i) => (
          <TaskCard task={task} index={i} key={i} deleteHandler={deleteHandler} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
