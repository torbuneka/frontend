import Task from "./Tasks";

function TaskList({tasks, subtask, completedTasks, editButtonClick, deleteButtonClick, checkboxDone, CreateSubtask, deleteSubtask, checkboxSubtask, renameSubtask}){

    var arr = !completedTasks ? tasks.filter(task => task.completed) : tasks.filter(task =>!task.completed); 
    
    return (
        <div className="task__list">
            <ul>
                {arr.map(task => {
                    return (<Task key={task.id} task={task} deleteButtonClick={deleteButtonClick} editButtonClick={editButtonClick} checkboxDone={checkboxDone} CreateSubtask={CreateSubtask} deleteSubtask={deleteSubtask} checkboxSubtask={checkboxSubtask} renameSubtask={renameSubtask}/>)
                    })}
            </ul>
        </div>
    );
}

export default TaskList;