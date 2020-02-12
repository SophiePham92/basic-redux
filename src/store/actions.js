/**
 * action types
 */

export const actionTypes = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}

/**
 * other constants
 */

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/**
 * action creators
 */

export function addToDo(text) {
    return {
        type: actionTypes.ADD_TODO,
        text
    }
}

export function removeToDo(id) {
    return {
        type: actionTypes.REMOVE_TODO,
        id
    }
}

export function toggleToDo(id) {
    return {
        type: actionTypes.TOGGLE_TODO,
        id
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: actionTypes.SET_VISIBILITY_FILTER,
        filter
    }
}