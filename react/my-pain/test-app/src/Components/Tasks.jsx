import {useEffect, useState} from 'react';

function Task({task}){
    
  return (
      <div className="task">
          <div>
              <input  type="checkbox" defaultChecked={task.completed}/>
              <input className="task_complete" type="text" value={task.title} />
          </div>
          <div>
              {task.completed && <button>restore</button>}
              {!task.completed && <button>edit</button>}
              {!task.completed && <button>delete</button>}
          </div>
      </div>
  );
  
}

export default Task;