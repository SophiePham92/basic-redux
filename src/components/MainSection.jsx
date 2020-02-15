import React from 'react'
import PropTypes from 'prop-types'
import VisibleToDoList from '../containers/VisibleToDoList'
import Footer from './Footer'

const MainSection = ({ toDoCount, completedCount, actions }) => (
    <section className="main">
        {
            !!toDoCount
            &&
            <span>
                <input
                    className='toggle-all'
                    type='checkbox'
                    readOnly
                    checked={toDoCount === completedCount}
                />
                <label onClick={actions.completeAllToDos} />
            </span>
        }
        <VisibleToDoList />
        {!!toDoCount && <Footer
            activeCount={toDoCount - completedCount}
            completedCount={completedCount}
            clearCompleted={actions.clearCompleted}
        />}
    </section>
)

MainSection.propTypes = {
    toDoCount: PropTypes.number.isRequired,
    completedCount: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
}

export default MainSection