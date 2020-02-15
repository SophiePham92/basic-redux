import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import { getCompletedToDoCount } from '../store/selectors'
import { bindActionCreators } from 'redux'
import * as ToDoActions from '../store/actions'

const mapStateToProps = state => ({
    toDoCount: state.toDos.length,
    completedCount: getCompletedToDoCount(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ToDoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MainSection)