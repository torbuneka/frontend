import {useContext, useEffect, useState} from 'react';
import SubtaskList from './SubtaskList';
import SubtaskContext from '../SubtaskContext'

const styles = {
    task:{
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

function Task({task, deleteButtonClick, editButtonClick, checkboxDone, CreateSubtask, deleteSubtask, checkboxSubtask, renameSubtask}){
    var title = task.title;
    const [readOnly, setReadOnly] = useState(true);
    const [editValue, setEditValue] = useState(task.title);
    const [subtasks] = useContext(SubtaskContext);

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
    <div style={styles.task}>
        <div className="Task" >
            <div>
                <input className="checkbox" type="checkbox" defaultChecked={task.completed} disabled={task.completed} onChange={() => checkboxDone(task)}/>
                <input className={"input",{"inputLineThrough":task.completed}} type="text" value={editValue} onChange={e => setEditValue(e.target.value)}/>
            </div>
            <div className="ChangeButtons">
                {task.completed && <button style={styles.button} onClick={() => checkboxDone(task)} >restore</button>}
                {!task.completed && <button /*onClick={() => CreateSubtask(task.id)}*/>+</button>}
                {!task.completed && <button style={styles.button} onClick={() => {handleEdit(task)}}>save changes</button>}
                {!task.completed && <button style={styles.delete} onClick={() => deleteButtonClick(task.id)}>delete</button>}
            </div>
            <div>
                <SubtaskList taskId ={task.id} CreateSubtask={CreateSubtask} deleteSubtask={deleteSubtask} checkboxSubtask={checkboxSubtask} renameSubtask={renameSubtask} />
            </div>
        </div>
    </div>
    );
  
}

export default Task;