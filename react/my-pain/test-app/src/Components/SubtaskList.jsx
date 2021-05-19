import {useContext, useState} from 'react';
import TaskContext from "../TaskContext";
import SubtaskContext from "../SubtaskContext";
import Subtask from "./Subtask"

function SubtaskList({subtask}) {
    const [tasks] = useContext(TaskContext);
    const [subtasks] = useContext(SubtaskContext);
    
    return (
        <div>
            <Subtask key={subtask.id} subtask={subtask}/>
        </div>
    )
}

export default SubtaskList;