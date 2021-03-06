import {useEffect, useState} from 'react';

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

function Subtask({subtask, task, deleteSubtask, checkboxSubtask, renameSubtask}) {
    const [readOnly, setReadOnly] = useState(true);
    const [editValue, setEditValue] = useState(subtask.title)
    var title = subtask.title;

    

    return (
        <div className="Subtask">
            <div>
                <input className="checkbox" type="checkbox" checked={subtask.completed} disabled={subtask.completed || task.completed} onChange={() => checkboxSubtask(subtask)}/>
                <input className={"input",{"inputLineThrough":subtask.completed}} type="text" value={editValue} disabled={subtask.completed || task.completed} onChange={e => setEditValue(e.target.value)}/>
            </div>
            <div className="ChangeButtons">
                {subtask.completed && <button style={styles.button} disabled={task.completed} onClick={() => checkboxSubtask(subtask) } >restore</button>}
                {!subtask.completed && <button style={styles.button} disabled={subtask.completed || task.completed} onClick={() => {renameSubtask(subtask, editValue)}}>save changes</button>}
                {!subtask.completed && <button style={styles.delete} disabled={subtask.completed || task.completed} onClick={() => deleteSubtask(subtask.id)}>delete</button>}
            </div>
        </div>
    )
}

export default Subtask;