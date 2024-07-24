import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/nav';
import './task.css'; // Import the CSS file
import { GetTaskApi } from '../api/apiServices';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await GetTaskApi();
    setTasks(response.data.data);
  };


  const deleteTask = () =>{
    
  }
  return (
    <div className="task-page">
      <Navbar />
      <div className="task-container">
        <div className="task-header">
          <button className="add-task-btn">Add Task</button>
          <div className="search-sort">
            <input type="text" placeholder="Search..." className="search-input" />
            <select className="sort-select">
              <option value="recent">Recent</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
        <div className="task-list">
          {tasks.map(task => (
            <div className="task-card" key={task._id}>
              <h3>{task.taskName}</h3>
              <p>{task.description}</p>
              <p>Created at: {new Date(task.createdAt).toLocaleString()}</p>
              <div className="task-actions">
                <button onClick={()=>console.log(task)} className="delete-btn">Delete</button>
                <button className="edit-btn">Edit</button>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
