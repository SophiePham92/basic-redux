import { connect } from 'react-redux'
import Header from '../components/Header'
import { addToDo } from '../store/actions'

export default connect(null, { addToDo })(Header)