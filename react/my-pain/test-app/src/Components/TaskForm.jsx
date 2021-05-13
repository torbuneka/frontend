import TaskList from "./TaskList"

function TaskForm({tasksArr, showCompletedTasks}){
    return (
        <div className="task__form">
            <div class="task__list">
                <div><h2>{!showCompletedTasks ? "Done" : "Active"}</h2></div>
                {showCompletedTasks && <div className="createButton"><button>Create task</button></div>}
            </div>
            <TaskList tasks={tasksArr} completedTasks={showCompletedTasks}/>
        </div>
    );
}

export default TaskForm;