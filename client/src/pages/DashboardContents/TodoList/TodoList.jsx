import React, { useEffect, useState } from 'react';
import './TodoList.css';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DashboardSideBar from '../../SideBars/DashboardSideBar/DashboardSideBar';


const TodoList = () => {
  const [task, setTask] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [titleList, setTitleList] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/api/get')
      .then((response) => {
        setTitleList(response.data);
        setTaskList(response.data.map(val => ({ id: val.id, task: val.task, title: val.title })));
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  const submitTask = () => {
    setLoading(true);

    if (editingTaskId) {
      // Edit existing task
      axios.put(`http://localhost:8081/api/edit/${editingTaskId}`, { title, task })
        .then(() => {
          alert("Task edited");
          setTitle("");
          setTask("");
          setEditingTaskId(null);
          refreshTaskList(); // Added to refresh the task list after editing
        })
        .catch((error) => {
          console.error("Error editing task:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // Add new task
      axios.post('http://localhost:8081/api/insert', { title, task })
        .then(() => {
          alert("Task added");
          setTitle("");
          setTask("");
          refreshTaskList(); // Added to refresh the task list after adding
        })
        .catch((error) => {
          console.error("Error adding task:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const deleteTask = (taskId) => {
    axios.delete('http://localhost:8081/api/delete', { data: { id: taskId } })
      .then(() => {
        alert("Task deleted");
        refreshTaskList(); // Added to refresh the task list after deleting
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  const editTask = (taskId) => {
    // Find the task to edit based on the taskId
    const taskToEdit = taskList.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditingTaskId(taskId);
      setTitle(taskToEdit.title);
      setTask(taskToEdit.task);
    }
  };

  const refreshTaskList = () => {
    axios.get('http://localhost:8081/api/get')
      .then((response) => {
        setTitleList(response.data);
        setTaskList(response.data.map(val => ({ id: val.id, task: val.task, title: val.title })));
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };

  return (
    <div className='progress-list'>
    <DashboardSideBar/>
    <div className='todo-list-main'>
    
      <div className='todo-list'>
        <h1> Task board</h1>

        <div className='form'>
          <div className='title'>
            <label>Title</label>
            <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className='task'>
            <label>Task</label>
            <input type='text' name='task' value={task} onChange={(e) => setTask(e.target.value)} />
          </div>
          <button onClick={submitTask} disabled={loading}>
            {loading ? "Adding/Editing Task..." : "Add/Edit Task"}
          </button>

          {taskList.map((val) => (
            <div key={val.id} className='task-list-result'>
              <h2>{val.title}</h2>
              <p>{val.task}</p>
              <EditIcon onClick={() => editTask(val.id)} />
              <DeleteIcon onClick={() => deleteTask(val.id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default TodoList;
