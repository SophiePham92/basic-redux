import { connect } from 'react-redux'
import { toggleToDo, deleteToDo, editToDo } from '../store/actions'
import { toDoFilters } from '../store/constants'
import ToDoList from '../components/ToDoList'

const getVisibleToDos = (toDos, filter) => {
    switch (filter) {
        case toDoFilters.SHOW_ACTIVE:
            return toDos.filter(t => !t.completed)
        case toDoFilters.SHOW_COMPLETED:
            return toDos.filter(t => t.completed)
        default: return toDos
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        toDos: getVisibleToDos(state.toDos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        completeToDo: id => {
            dispatch(toggleToDo(id))
        },
        deleteToDo: id => {
            dispatch(deleteToDo(id))
        },
        editToDo: (id, text) => {
            dispatch(editToDo(id, text))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)