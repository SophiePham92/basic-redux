import React from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = ({ toDos, completeToDo, deleteToDo, editToDo }) => {
    return <ul className='todo-list'>
        {toDos.map(t => {
            return <ToDo
                key={t.id}
                toDo={t}
                completeToDo={completeToDo}
                deleteToDo={deleteToDo}
                editToDo={editToDo} />
        })}
    </ul>
}

ToDoList.propTypes = {
    toDos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    completeToDo: PropTypes.func.isRequired,
    deleteToDo: PropTypes.func.isRequired,
    editToDo: PropTypes.func.isRequired
}

export default ToDoList