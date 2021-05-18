import {useEffect, useState} from 'react';
/*import styles from "../styles/Task.module.css"*/

const styles = {
    items:{
        display: 'flex',
        flexDirection: 'row'
    },
    checkbox:{
        textDecoration: 'line-through'
    },
    delete:{
        color: 'red',
        textDecoration: 'underline'
    },
    button:{
        textDecoration: 'underline',
        display: 'flex',
    }
    

}

function Task({task, deleteButtonClick, editButtonClick, checkboxDone}){
    var title = task.title;
    const [readOnly, setReadOnly] = useState(true);
    const [editValue, setEditValue] = useState(task.title);

    const handleEdit = (task) => {
        setReadOnly(false);
        editButtonClick(task, editValue);
        if(editValue) {
            editButtonClick(task, editValue)
        } else {
            setEditValue(task.title);
        }
    }
    
  return (
    <div style={styles.items}>
        <div className="Task" style={task.completed? styles.completed : styles.active}>
            <div>
                <input className="checkbox" type="checkbox" defaultChecked={task.completed} disabled={task.completed} onChange={() => checkboxDone(task)}/>
                <input className={"input",{"inputLineThrough":task.completed}} type="text" value={editValue} onChange={e => setEditValue(e.target.value)}/>
            </div>
            <div>
                {task.completed && <button style={styles.button} onClick={() => checkboxDone(task)} >restore</button>}
                {!task.completed && <button style={styles.button} onClick={() => {handleEdit(task)}} >edit</button>}
                {!task.completed && <button style={styles.delete} onClick={() => deleteButtonClick(task.id)}>delete</button>}
            </div>
        </div>
    </div>
    );
  
}

export default Task;