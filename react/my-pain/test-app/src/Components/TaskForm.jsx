import TaskList from "./TaskList";
/*import styles from "../styles/TaskForm.module.sass"*/
import {nanoid} from 'nanoid';
import {useState, useEffect } from 'react'

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
    },
    createButton: {
        marginTop: '10px',
        display: 'flex',
        border: '2px solid green' ,
        padding: '10px'
    }
}


function TaskForm({tasksArr, showCompletedTasks, addButtonClick, deleteButtonClick, editButtonClick, checkboxDone}){
    return (
        <div className="task__form" style={styles.form}>
            <div class="task__list">
            {showCompletedTasks && <div className="createButton" style={styles.createButton}><button onClick={addButtonClick}>Create task</button></div>}
                <div><h2 style={styles.form}>{!showCompletedTasks ? "Done" : "Active"}</h2></div>
            </div>
            <TaskList tasks={tasksArr} completedTasks={showCompletedTasks} deleteButtonClick={deleteButtonClick} editButtonClick={editButtonClick} checkboxDone={checkboxDone}/>
        </div>
    );
}

export default TaskForm;