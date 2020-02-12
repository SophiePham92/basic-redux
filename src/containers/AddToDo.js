import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../store/actions'

let AddToDo = ({ dispatch }) => {
    let inputRef;

    return <div>
        <form
            onSubmit={e => {
                e.preventDefault()
                if (!inputRef.value.trim()) return
                dispatch(addToDo(inputRef.value))
                inputRef.value = ''
            }}
        >
            <input type='text' ref={node => inputRef = node} />
            <button type='submit'>Add Item</button>
        </form>
    </div>
}

AddToDo = connect()(AddToDo)

export default AddToDo