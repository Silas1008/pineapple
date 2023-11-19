import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './TodoList.css';
import axios from 'axios';
import DashboardSideBar from '../../SideBars/DashboardSideBar/DashboardSideBar';

const TodoList = () => {
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  useEffect(() => {
    
    axios.get('http://localhost:8080/api/get')
      .then((response) => {
        setTaskList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const submitTask = () => {
    if (editMode) {
      
      axios.put(`http://localhost:8080/api/update/${editTaskId}`, { task })
        .then(() => {
          alert('Task updated');
          setEditMode(false);
          setEditTaskId(null);
          
          fetchTaskList();
        })
        .catch((error) => {
          console.error('Error updating task:', error);
        });
    } else {
     
      axios.post('http://localhost:8080/api/insert', { title, task })
        .then(() => {
          alert('New task added');
          
          fetchTaskList();
        })
        .catch((error) => {
          console.error('Error adding new task:', error);
        });
    }

    
    setTitle('');
    setTask('');
  };

  const deleteTask = (titletask) => {
    axios.delete(`http://localhost:8080/api/delete/${titletask}`)
      .then(() => {
        setTaskList((prevTaskList) => prevTaskList.filter((task) => task.title !== titletask));
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
      });
  };

  const editTask = (titletask) => {
    const taskToEdit = taskList.find((task) => task.title === titletask);
    setTitle(taskToEdit.title);
    setTask(taskToEdit.task);
    setEditMode(true);
    setEditTaskId(taskToEdit.title);
  };

  const fetchTaskList = () => {
    axios.get('http://localhost:8080/api/get')
      .then((response) => {
        setTaskList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className='todo-list-main'>
    <div className='dashboard-sidebar'>
    <DashboardSideBar/>
    </div>
    
    <div className='todo-list'>
      <h1>To-do List</h1>

      <div className='input-fields'>
        <form>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Task</label>
          <input
            type='text'
            name='description'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button type='button' onClick={submitTask}>
            {editMode ? 'Update' : 'Add'}
          </button>
        </form>
        <div className='results'>
          {taskList.map((val) => {
            return (
              <div className='list-cards' key={val.title}>
                <h2>{val.title}</h2>
                <p>{val.task}</p>

                <div className='edit-delete'>
                  <DeleteIcon onClick={() => deleteTask(val.title)} />
                  <EditIcon onClick={() => editTask(val.title)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default TodoList;
