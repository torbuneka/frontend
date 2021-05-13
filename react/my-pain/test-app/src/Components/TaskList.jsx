import Task from "./Tasks";

function TaskList({tasks, completedTasks}){

    var arr = !completedTasks ? tasks.filter(task => task.completed) : tasks.filter(task =>!task.completed); 
    
    return (
        <div className="task__list">
            <ul>
                {arr.map(task => {
                    return (<Task key={task.id} task={task}/>)
                    })}
            </ul>
        </div>
    );
}

export default TaskList;