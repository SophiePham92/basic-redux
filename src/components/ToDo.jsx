import React from 'react'
import PropTypes from 'prop-types'

const ToDo = ({ clickItem, completed, text }) => {
    return <li
        onClick={clickItem}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        {text}
    </li>
}

ToDo.propTypes = {
    clickItem: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default ToDo;