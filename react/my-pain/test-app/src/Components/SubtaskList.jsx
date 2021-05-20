import {useContext, useState} from 'react';
import TaskContext from "../TaskContext";
import SubtaskContext from "../SubtaskContext";
import Subtask from "./Subtask"

function SubtaskList({subtask, CreateSubtask, deleteSubtask, checkboxSubtask, renameSubtask}) {
    const [tasks] = useContext(TaskContext);
    const [subtasks] = useContext(SubtaskContext);

    const arrSubt = subtasks.filter(subtask => subtask.taskId === tasks.id);

    return (
        <div>
            {arrSubt.map(   <Subtask key={subtask.id} subtask={subtask} CreateSubtask={CreateSubtask} deleteSubtask={deleteSubtask} checkboxSubtask={checkboxSubtask} renameSubtask={renameSubtask} />)}
        </div>
    )
}

export default SubtaskList;