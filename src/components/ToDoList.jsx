import React from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = ({ toDos, onToDoClick }) => {
    return <ul>
        {toDos.map(t => {
            return <ToDo
                key={t.id}
                completed={t.completed}
                text={t.text}
                clickItem={() => onToDoClick(t.id)} />
        })}
    </ul>
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    onToDoClick: PropTypes.func.isRequired
}

export default ToDoList