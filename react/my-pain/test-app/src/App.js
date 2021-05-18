import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import TaskForm from './Components/TaskForm';

function App() {

  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([/*
    {
      "id": 1,
      "sequence": 1,
      "title": "Task 1",
      "completed": true
    },
    {
      "completed": false,
      "title": "Task 2",
      "id": 2,
      "sequence": 2
    },
    {
      "completed": false,
      "title": "Task 3",
      "id": 3,
      "sequence": 3
    }*/
  ]);

  useEffect(() => {
    axios.get("http://185.246.66.84:3000/etorbunova/tasks")
    .then(res => setTasks(res.data))
    .catch(err => setError(err))
  },[])

 


  return (
    <>
      <div>
        <TaskForm tasksArr={tasks} showCompletedTasks={true}/>
      </div>
      <div>
        <TaskForm tasksArr={tasks} showCompletedTasks={false}/>
      </div>
    </>
  );
}

export default App;








/*
        <TakeDataTask address="http://185.246.66.84:3000/etorbunova/tasks" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
*/
