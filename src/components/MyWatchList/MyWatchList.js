import React, { useEffect, useState } from 'react';
import Task from './TaskInput/Task/Task';
import TaskInput from './TaskInput/TaskInput';

const MyWatchList = () => {
  const [list, setList] = useState([]);

  const addTask = (data) => {
    let newList = [...list, data];
    setList(newList)
    localStorage.setItem('tasks', JSON.stringify(newList))
  };

  const completeTask = (id) => {
    let newList = list.map(el => {
      if (+el.id === +id) {
        el.done = !el.done
      }
      return el;
    })
    setList(newList)
    localStorage.setItem('tasks', JSON.stringify(newList))
  }

  const deleteTask = (id) => {
    let newList = list.filter( el => +el.id !== +id);
    setList(newList)
    localStorage.setItem('tasks', JSON.stringify(newList));
  }

  useEffect(() => {
    if (localStorage.getItem('tasks')) {
      setList(JSON.parse(localStorage.getItem('tasks')));
    }
  }, []);

  return (
    <div>
      <TaskInput addTask={addTask}/>
      {list.map(el => <Task task={el} deleteTask={deleteTask} completeTask={completeTask} key={el.id} />)}
    </div>
  )
};

export default MyWatchList;
