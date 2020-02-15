import { combineReducers } from 'redux';
import { actionTypes, toDoFilters } from './constants'
import uuid from 'uuid'

const initialState = [
    {
        text: 'Use Redux',
        completed: false,
        id: uuid()
    }
]

const toDos = (state = initialState, action) => {
    const {
        ADD_TODO,
        EDIT_TODO,
        DELETE_TODO,
        TOGGLE_COMPLETED,
        COMPLETE_ALL_TODOS,
        CLEAR_COMPLETED
    } = actionTypes

    switch (action.type) {
        case ADD_TODO:
            return state.concat({
                id: uuid(),
                text: action.text,
                completed: false
            })
        case DELETE_TODO:
            return state.filter(t => t.id !== action.id)
        case EDIT_TODO:
            return state.map(t => {
                if (t.id === action.id) return {
                    ...t,
                    text: action.text
                }
                else return t
            })

        case TOGGLE_COMPLETED:
            return state.map(t => {
                if (t.id === action.id) return {
                    ...t,
                    completed: !t.completed
                }
                else return t
            })
        case COMPLETE_ALL_TODOS:
            const areAllToDoCompleted = state.every(t => t.completed)
            return state.map(t => ({
                ...t,
                completed: !areAllToDoCompleted
            }))
        case CLEAR_COMPLETED:
            return state.filter(t => !t.completed)
        default:
            return state
    }
}

const visibilityFilter = (state = toDoFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case actionTypes.SET_VISIBILITY_FILTER:
            return action.filter
        default: return state
    }
}

/**
 * 1st way to combine reducer
 */

let rootReducer = (state = {}, action) => {
    return {
        visibilityFilter: toDoFilters(state.visibilityFilter, action),
        toDos: toDos(state.toDos, action)
    }
}

/**
 * 2nd way to combine reducer
 */

rootReducer = combineReducers({
    visibilityFilter,
    toDos
})

export default rootReducer

