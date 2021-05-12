import {useEffect, useState} from 'react';
import axios from 'axios';

function TakeDataTask(props) {
  
    const [tasks, setTask] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios.get(props.address)
        .then(res => setTask(res.data))
        .catch(err => setError(err))
    },[])
  
   
    return (
      <div className="allTask">
            <ul>
                 {tasks.map(task => (<li key={task.id}>{task.title}</li>))}
            </ul>
      </div>
    );
}
  
export default TakeDataTask;