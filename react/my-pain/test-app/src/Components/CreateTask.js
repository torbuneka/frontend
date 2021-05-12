import PropTypes from 'prop-types';
import React from 'react'

/*const Button = memo(({text, onClick}) => {
  return <div className={styles.button} onClick={onClick}>{text}</div>
})*/

function CreateTask(){
    return(
        <div className="CreateTask" onClick={() => {}}>Create task</div>
    )
}

CreateTask.propTypes = {
  onClick: PropTypes.func,
};

export default CreateTask;