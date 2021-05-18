import TaskList from "./TaskList";
/*import styles from "../styles/TaskForm.module.sass"*/

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


function TaskForm({tasksArr, showCompletedTasks}){
    return (
        <div className="task__form" style={styles.form}>
            <div class="task__list">
            {showCompletedTasks && <div className="createButton" style={styles.createButton}><button>Create task</button></div>}
                <div><h2 style={styles.form}>{!showCompletedTasks ? "Done" : "Active"}</h2></div>
            </div>
            <TaskList tasks={tasksArr} completedTasks={showCompletedTasks}/>
        </div>
    );
}

export default TaskForm;