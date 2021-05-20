import {useEffect, useState} from 'react';

function Subtask({subtask, deleteSubtask, checkboxSubtask, renameSubtask}) {
    /*const [readOnly, setReadOnly] = useState(true);*/

    return (
        <div className="Subtask">
            <div>
                <input className="checkbox" type="checkbox" defaultChecked={subtask.completed} disabled={subtask.completed} onChange={() => checkboxSubtask(subtask)}/>
                <input className={"input",{"inputLineThrough":subtask.completed}} type="text" value={subtask.title} /*onChange={e => setEditValue(e.target.value)}*//>
            </div>
            <div className="ChangeButtons">
                {subtask.completed && <button /*style={styles.button}*/ onClick={() => checkboxSubtask(subtask)} >restore</button>}
                {!subtask.completed && <button /*style={styles.button}*/ onClick={() => {renameSubtask(subtask)}}>save changes</button>}
                {!subtask.completed && <button /*style={styles.delete}*/ onClick={() => deleteSubtask(subtask.id)}>delete</button>}
            </div>
        </div>
    )
}

export default Subtask;