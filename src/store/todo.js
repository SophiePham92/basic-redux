import { createStore, combineReducers } from 'redux';
import { actionTypes, visibilityFilters } from './actions'

const initialState = {
    visibilityFilter: visibilityFilters.SHOW_ALL,
    toDos: []
}

const toDos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat({
                id: state.length + 1,
                text: action.text,
                completed: false
            })
        case 'REMOVE_TODO':
            return state.filter(t => t.id !== action.id)

        case 'TOGGLE_TODO':
            return state.map(t => {
                if (t.id === action.id) return {
                    ...t,
                    completed: !t.completed
                }
                else return t
            })
        default:
            return state
    }
}

const visibilityFilter = (state = visibilityFilters.SHOW_ALL, action) => {
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
        visibilityFilter: visibilityFilters(state.visibilityFilter, action),
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

const toDoStore = createStore(rootReducer)

console.log('store initial state', toDoStore.getState())

// const unsubscribe = toDoStore.subscribe(() => console.log('state change', toDoStore.getState()))

// toDoStore.dispatch({ type: actionTypes.ADD_TODO, text: 'Learn abt action' })
// toDoStore.dispatch({ type: actionTypes.ADD_TODO, text: 'Learn abt reducers' })
// toDoStore.dispatch({ type: actionTypes.ADD_TODO, text: 'Learn abt store' })

// toDoStore.dispatch({ type: actionTypes.TOGGLE_TODO, id: 2 })

// toDoStore.dispatch({ type: actionTypes.SET_VISIBILITY_FILTER, filter: visibilityFilters.SHOW_COMPLETED })

export default toDoStore;

