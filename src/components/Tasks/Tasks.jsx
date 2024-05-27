import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import AddTask from "../AddTask/AddTask";
import { Link } from "react-router-dom";

const Tasks = () => {
  const { tasks, getTasks, deleteTask } = useContext(GlobalContext);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <AddTask />
      {tasks.map((task) => {
        return (
          <div key={task._id}>
            <h2>{task.title}</h2>
            <button onClick={() => deleteTask(task._id)}>X</button>
            <button><Link to={"/editTask/"+task._id}>Edit task</Link> </button>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
