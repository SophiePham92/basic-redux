import { createSelector } from 'reselect'
import { toDoFilters } from '../store/constants'

const getVisibilityFilter = state => state.visibilityFilter
const getToDos = state => state.toDos

export const getVisibleToDos = createSelector(
    [getVisibilityFilter, getToDos],
    (filter, toDos) => {
        const { SHOW_COMPLETED, SHOW_ACTIVE } = toDoFilters
        switch (filter) {
            case SHOW_ACTIVE: return toDos.filter(t => !t.completed)
            case SHOW_COMPLETED: return toDos.filter(t => t.completed)
            default: return toDos
        }
    }
)

export const getCompletedToDoCount = createSelector(
    [getToDos],
    toDos => toDos.filter(t => t.completed).length
)