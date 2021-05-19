import Task from "./Tasks";



function TaskList({tasks, completedTasks, editButtonClick, deleteButtonClick, checkboxDone}){

    var arr = !completedTasks ? tasks.filter(task => task.completed) : tasks.filter(task =>!task.completed); 
    
    return (
        <div className="task__list">
            <ul>
                {arr.map(task => {
                    return (<Task key={task.id} task={task} deleteButtonClick={deleteButtonClick} editButtonClick={editButtonClick} checkboxDone={checkboxDone}/>)
                    })}
            </ul>
        </div>
    );
}

export default TaskList;