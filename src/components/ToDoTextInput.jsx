import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class ToDoTextInput extends Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        text: PropTypes.string,
        isEdited: PropTypes.bool,
        isNew: PropTypes.bool
    }

    state = {
        text: this.props.text || ''
    }

    handleInputText = e => {
        this.setState({ text: e.target.value })
    }

    handleBlur = e => {
        const { isNew, onSave } = this.props
        if (!isNew) onSave(this.state.text)
    }

    handleSubmit = e => {
        if (e.which === 13) {
            this.props.onSave(this.state.text.trim())
            if (this.props.isNew) {
                this.setState({ text: '' })
            }
        }
    }

    render() {
        const { placeholder, isEdited, isNew } = this.props
        return (
            <input
                type='text'
                autoFocus={true}
                className={
                    classnames({
                        edit: isEdited,
                        'new-todo': isNew
                    })
                }
                placeholder={placeholder}
                value={this.state.text}
                onChange={this.handleInputText}
                onBlur={this.handleBlur}
                onKeyDown={this.handleSubmit}
            />
        )
    }
}
