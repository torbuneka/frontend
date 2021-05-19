import TaskList from "./TaskList";
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
        justifyContent: 'center',
        border: '2px solid green',
        padding: '10px',
        height:'45px',
        width:'200px',
        background: 'green'
    }
}


function TaskForm({tasksArr, subtask,  showCompletedTasks, addButtonClick, deleteButtonClick, editButtonClick, checkboxDone}){
    return (
        <div className="task__form" style={styles.form}>
            <div class="task__list">
            {showCompletedTasks && <div className="createButton"><button style={styles.createButton} onClick={addButtonClick}>Create task</button></div>}
                <div><h2 style={styles.form}>{!showCompletedTasks ? "Done tasks" : "Active tasks"}</h2></div>
            </div>
            <TaskList tasks={tasksArr} subtask={subtask}  completedTasks={showCompletedTasks} deleteButtonClick={deleteButtonClick} editButtonClick={editButtonClick} checkboxDone={checkboxDone}/>
        </div>
    );
}

export default TaskForm;