import { actionTypes } from './constants'

export const addToDo = text => ({ type: actionTypes.ADD_TODO, text });
export const editToDo = (id, text) => ({ type: actionTypes.EDIT_TODO, id, text });
export const deleteToDo = id => ({ type: actionTypes.DELETE_TODO, id });
export const toggleToDo = id => ({ type: actionTypes.TOGGLE_COMPLETED, id });
export const completeAllToDos = () => ({ type: actionTypes.COMPLETE_ALL_TODOS });
export const clearCompleted = () => ({ type: actionTypes.CLEAR_COMPLETED });
export const setVisibilityFilter = filter => ({ type: actionTypes.SET_VISIBILITY_FILTER, filter });
