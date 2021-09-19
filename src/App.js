import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Todo from './Todo';
import EditDialog from './EditDialog';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';



function App() {
  const [task, setTask] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [Todolist, setTodolist] = useState([{}]);
  const [currentTask, setCurrentTask] = useState("");
  const [updatedTask, setUpdatedTask] = useState("");
  const [id, setId] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Axios.get('https://yjm-todolist.herokuapp.com/list').then((res) => {
      // const todolist = res.data;
      setTodolist(res.data);
    });
  }, [Todolist]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  // CRUD OPERATIONS

  const addTask = async (e) => {
    e.preventDefault();
    if (task !== '') {
      await Axios.post('https://yjm-todolist.herokuapp.com/insert', {
        task: task,
        isCompleted: isCompleted,
      });
      setTask("");
    }
    else {
      alert("Tast is needed :)");
    }

  }

  const deteTask = (id) => {
    Axios.delete(`https://yjm-todolist.herokuapp.com/delete/${id}`, { data: { id: id } });
  }

  const updateTask = (id) => {
    handleClickOpen();
    const task = Todolist.find(o => o._id === id);
    setCurrentTask(task.task);
    setId(id);
    setUpdatedTask(task.task);
  }

  const sendUpdateReq = () => {
    setUpdatedTask(currentTask);
    Axios.put('https://yjm-todolist.herokuapp.com/update', { id: id, updatedTask: updatedTask });
    setOpen(false);
  }

  return (
    <div className="App">
      <h1 className="custom-padding-bottom">Todo List App</h1>
      <form onSubmit={addTask}>
        <FormControl className="custom-form-control" style={{ minWidth: "400px" }}>
          <input className="custom-input" value={task} onChange={(e) => { setTask(e.target.value); }} placeholder="Add new Todo" type="text"></input>
          <Button type="submit" style={{ margin: '10px' }} color="primary" variant="contained" onClick={addTask}>Add new Todo</Button>
        </FormControl>
        {
          Todolist.map((todo, key) => {
            return (<Todo key={key} todo={todo} deteTask={deteTask} updateTask={updateTask} />);
          })
        }
        <EditDialog open={open} handleClose={handleClose} setUpdatedTask={setUpdatedTask} sendUpdateReq={sendUpdateReq} currentTask={currentTask} />
      </form>
    </div >
  );
}

export default App;
