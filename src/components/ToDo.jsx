import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ToDoTextInput from './ToDoTextInput'

class ToDo extends React.Component {
    static propTypes = {
        toDo: PropTypes.object.isRequired,
        editToDo: PropTypes.func.isRequired,
        deleteToDo: PropTypes.func.isRequired,
        completeToDo: PropTypes.func.isRequired
    }

    state = {
        isEditing: false
    }

    handleSave = (id, text) => {
        if (text.length) this.props.editTodo(id, text)
        else this.props.deleteToDo(id)
        this.setState({ isEditing: true })
    }

    handleDoubleClick = () => {
        this.setState({ isEditing: true })
    }

    render() {
        const { toDo, completeToDo, deleteToDo } = this.props
        //console.log('to do props', this.props, this.state.isEditing)
        let element = this.state.isEditing ?
            <ToDoTextInput text={toDo.text} isEdited={this.state.isEditing}
                onSave={text => this.handleSave(toDo.id, text)} />
            :
            <div className="view">
                <input type='checkbox' className='toggle' checked={toDo.completed} onChange={() => completeToDo(toDo.id)} />
                <label onDoubleClick={this.handleDoubleClick}>{toDo.text}</label>
                <button className="destroy" onClick={() => deleteToDo(toDo.id)} />
            </div>
        return <li
            className={
                classnames({
                    completed: toDo.completed,
                    editing: this.state.isEditing
                })
            }
        >{element}</li>
    }
}

export default ToDo;