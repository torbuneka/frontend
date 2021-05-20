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

function Subtask({subtask, deleteSubtask, checkboxSubtask, renameSubtask}) {
    const [readOnly, setReadOnly] = useState(true);
    const [editValue, setEditValue] = useState(subtask.title)
    var title = subtask.title;

    

    return (
        <div className="Subtask">
            <div>
                <input className="checkbox" type="checkbox" defaultChecked={subtask.completed} disabled={subtask.completed} onChange={() => checkboxSubtask(subtask)}/>
                <input className={"input",{"inputLineThrough":subtask.completed}} type="text" value={editValue} onChange={e => setEditValue(e.target.value)}/>
            </div>
            <div className="ChangeButtons">
                {subtask.completed && <button style={styles.button} onClick={() => checkboxSubtask(subtask)} >restore</button>}
                {!subtask.completed && <button style={styles.button} onClick={() => {renameSubtask(subtask, editValue)}}>save changes</button>}
                {!subtask.completed && <button style={styles.delete} onClick={() => deleteSubtask(subtask.id)}>delete</button>}
            </div>
        </div>
    )
}

export default Subtask;