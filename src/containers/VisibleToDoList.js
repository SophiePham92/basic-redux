import { connect } from 'react-redux'
import { visibilityFilters, toggleToDo } from '../store/actions'
import ToDoList from '../components/ToDoList'

const getVisibleToDos = (toDos, filter) => {
    switch (filter) {
        case visibilityFilters.SHOW_ACTIVE:
            return toDos.filter(t => !t.completed)
        case visibilityFilters.SHOW_COMPLETED:
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
        onToDoClick: id => {
            dispatch(toggleToDo(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)