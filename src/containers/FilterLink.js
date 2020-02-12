import { connect } from 'react-redux'
import { setVisibilityFilter } from '../store/actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onclick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)