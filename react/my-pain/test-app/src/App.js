import './App.css';
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import TaskForm from './Components/TaskForm';
import SubtaskContext from './SubtaskContext' ;
import TaskContext from './TaskContext' ;

function App() {

  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [subtasks, setSubtasks] = useState([]);

  useEffect(() => {
    axios.get("http://185.246.66.84:3000/etorbunova/tasks")
    .then(res => setTasks(res.data))
    .catch(err => setError(err))

    axios.get("http://185.246.66.84:3000/etorbunova/subtasks")
    .then(res => setSubtasks(res.data))
    .catch(err => setError(err))
  },[])

  

  const CreateTask = useCallback(() => {
    const newTask = {
        completed: false,
        title: tasks.length === 0 ? "Task 1" : "Task " + (tasks.length + 1),
        sequence: 1
    }
    axios.post("http://185.246.66.84:3000/etorbunova/tasks", newTask)
    .then(response => {
        setTasks(prev =>
            [...prev,response.data]
        );
    }).catch(error => console.log(error));
  },[tasks, setTasks]) 



  const CreateSubtask = useCallback((id) => {
    const newSubtask = {
        completed: false,
        sequence: 1 ,
        taskId: id,
        title: "Subtask for current Task" 
    }
    axios.post("http://185.246.66.84:3000/etorbunova/subtasks", newSubtask)
    .then(response => {
        setSubtasks(prev =>
            [...prev, response.data]
        );
    })
    .catch(error => console.log(error));
  },[subtasks, setSubtasks])


  function deleteTask(id){
    axios.delete("http://185.246.66.84:3000/etorbunova/tasks/" + id)
      .then(response => {
          setTasks(prev => prev.filter(curr => curr.id !== id));
      })
      .catch(error => console.log(error));
  }  

  function deleteSubtask(id){
    axios.delete("http://185.246.66.84:3000/etorbunova/subtasks/" + id)
      .then(response => {
        setSubtasks(prev => prev.filter(curr => curr.id !== id));
      })
      .catch(error => console.log(error));
  }  

  function checkboxDone(task){
    axios.put("http://185.246.66.84:3000/etorbunova/tasks/" + task.id, {
          completed: !task.completed,
          title: task.title,
          sequence: task.sequence           
      })
      .then(response => {
          setTasks(prev =>{
              return [...prev.filter(curr => curr.id !== task.id),response.data]
          });
      })
      .catch(error => console.log(error));
  }

  function checkboxSubtask(task){
    axios.put("http://185.246.66.84:3000/etorbunova/subtasks/" + task.id, {
          completed: !task.completed,
          title: task.title,
          sequence: task.sequence,
          taskId: task.taskId                
      })
      .then(response => {
        setSubtasks(prev =>{
              return [...prev.filter(curr => curr.id !== task.id),response.data]
          });
      })
      .catch(error => console.log(error));
  }


  const renameTask = useCallback((task, newTitle) => {
      console.log("http://185.246.66.84:3000/etorbunova/tasks/" + task.id);
      if (task.title !== newTitle){
          axios.put("http://185.246.66.84:3000/etorbunova/tasks/" + task.id, {
              completed: task.completed,
              title: newTitle,
              sequence: task.sequence           
          })
          .then(response => {
              setTasks(prev =>{
                  return [...prev.filter(curr => curr.id !== task.id),response.data]});
          })
          .catch(error => console.log(error));
      }
  },[setTasks])   

  const renameSubtask = useCallback((task, newTitle) => {
    if (task.title !== newTitle){
        axios.put("http://185.246.66.84:3000/etorbunova/subtasks/" + task.id, {
            completed: task.completed,
            title: newTitle,
            sequence: task.sequence,
            taskId: task.taskId           
        })
        .then(response => {
          setSubtasks(prev =>{
                return [...prev.filter(curr => curr.id !== task.id),response.data]});
        })
        .catch(error => console.log(error));
    }
},[setSubtasks])  





  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      <SubtaskContext.Provider value={[subtasks, setSubtasks]}>
      <div>
        <TaskForm tasksArr={tasks} showCompletedTasks={true} addButtonClick={CreateTask} deleteButtonClick={deleteTask} editButtonClick={renameTask} checkboxDone={checkboxDone} CreateSubtask={CreateSubtask} deleteSubtask={deleteSubtask} checkboxSubtask={checkboxSubtask} renameSubtask={renameSubtask}/>
      </div>
      <div>
        <TaskForm tasksArr={tasks} showCompletedTasks={false} addButtonClick={CreateTask} checkboxDone={checkboxDone}/>
      </div>
      </SubtaskContext.Provider>
    </TaskContext.Provider>
  );
}

export default App;






/*
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
