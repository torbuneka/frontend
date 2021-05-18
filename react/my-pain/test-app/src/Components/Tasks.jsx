import {useEffect, useState} from 'react';
/*import styles from "../styles/Task.module.css"*/

const styles = {
    item:{
        display: 'flex',
        flexDirection: 'row'
    },
    checkbox:{
        textDecoration: 'line-through'
    }
    

}

function Task({task}){
    
  return (
    <div className={"item",{"completed":task.completed},{"active":!task.completed}}>
        <div>
            <input className="checkbox" type="checkbox" defaultChecked={task.completed} disabled={task.completed}/>
            <input className={"input",{"inputLineThrough":task.completed}} type="text" value={task.title}/>
        </div>
        <div>
            {task.completed && <button>restore</button>}
            {!task.completed && <button>edit</button>}
            {!task.completed && <button>delete</button>}
        </div>
    </div>
    );
  
}

export default Task;