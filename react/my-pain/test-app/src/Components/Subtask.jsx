import {useEffect, useState} from 'react';

function Subtask({subtask}) {
    const [readOnly, setReadOnly] = useState(true);

    return (
        <div className="Subtask">
            <div>
                <input className="checkbox" type="checkbox" defaultChecked={subtask.completed} disabled={subtask.completed} /*onChange={() => checkboxDone(subtask)}*//>
                <input className={"input",{"inputLineThrough":task.completed}} type="text" value={editValue} onChange={e => setEditValue(e.target.value)}/>
            </div>
            <div className="ChangeButtons">
                {subtask.completed && <button style={styles.button} /*onClick={() => checkboxDone(subtask)} */>restore</button>}
                {!subtask.completed && <button style={styles.button} /*onClick={() => {handleEdit(subtask)}}*/>save changes</button>}
                {!subtask.completed && <button style={styles.delete} /*onClick={() => deleteButtonClick(subtask.id)}*/>delete</button>}
            </div>
        </div>
    )
}

export default Subtask;