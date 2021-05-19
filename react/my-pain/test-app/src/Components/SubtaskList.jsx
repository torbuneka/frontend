import {useContext, useState} from 'react';
import TaskContext from "../TaskContext";
import SubtaskContext from "../SubtaskContext";
import Subtask from "./Subtask"

function SubtaskList({subtask, CreateSubtask, deleteSubtask, checkboxSubtask, renameSubtask}) {
    const [tasks] = useContext(TaskContext);
    const [subtasks] = useContext(SubtaskContext);

    /* надо сделать сортировку по ид такса, чем бы еще заняться в 2 часа ночи */

    return (
        <div>
            <Subtask key={subtask.id} subtask={subtask} CreateSubtask={CreateSubtask} deleteSubtask={deleteSubtask} checkboxSubtask={checkboxSubtask} renameSubtask={renameSubtask} />
        </div>
    )
}

export default SubtaskList;