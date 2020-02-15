import React from 'react'
import PropsTypes from 'prop-types'
import ToDoTextInput from './ToDoTextInput'

const Header = ({ addToDo }) => {
    return <header className='header'>
        <h1>todos</h1>
        <ToDoTextInput
            onSave={text => { if (text.length !== 0) addToDo(text) }}
            isNew
            placeholder='What needs to be done?'
        />
    </header>
}

Header.propTypes = {
    addToDo: PropsTypes.func.isRequired
}

export default Header