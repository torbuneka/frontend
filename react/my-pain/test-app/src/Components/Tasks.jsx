import {useContext, useEffect, useState} from 'react';
import SubtaskList from './SubtaskList';
import SubtaskContext from '../SubtaskContext'
import { DragDropContext, Droppableв  } from 'react-beautiful-dnd';

const styles = {
    task:{
        display: 'flex',
        /*flexDirection: 'row'*/
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

    const [currentCard, setCurrentCard] = useState(null)

    function dragStartHandler(e, card) {
        console.log('drag', card);
        setCurrentCard(card.sequence)
    }
    function dragEndHandler(e) {
        e.target.style.background = 'white'
    }
    function dragOverHandler(e) {
        e.preventDefault();
        e.target.style.background = 'lightgray'
    }
    function dropHandler(e, card) {
        e.preventDefault();
        console.log('drop', card);
    }



    
  return (
    <div style={styles.task} className="BigTask" 
    draggable={true} 
    onDragStart={(e)=>dragStartHandler(e, task)}
    onDragLeave={(e)=>dragEndHandler(e)}
    onDragOver={(e)=>dragOverHandler(e)}
    onDrop={(e)=>dropHandler(e, task)}>



        <div className="Task" >
            <div>
                <input className="checkbox" type="checkbox" defaultChecked={task.completed} disabled={task.completed} onChange={() => checkboxDone(task)}/>
                <input className={"input",{"inputLineThrough":task.completed}} type="text" value={editValue} disabled={ task.completed} onChange={e => setEditValue(e.target.value)}/>
            </div>
            <div className="ChangeButtons">
                {task.completed && <button style={styles.button} onClick={() => checkboxDone(task)} >restore</button>}
                {!task.completed && <button onClick={() => CreateSubtask(task.id)}>+</button>}
                {!task.completed && <button style={styles.button} onClick={() => {handleEdit(task)}}>save changes</button>}
                {!task.completed && <button style={styles.delete} onClick={() => deleteButtonClick(task.id)}>delete</button>}
            </div>
        </div>
        <div className="Task">
            <SubtaskList taskId ={task.id} task={task} CreateSubtask={CreateSubtask} deleteSubtask={deleteSubtask} checkboxSubtask={checkboxSubtask} renameSubtask={renameSubtask} />
        </div>
        
    </div>
    );
  
}

export default Task;