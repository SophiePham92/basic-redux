import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'
import { toDoFilters } from '../store/constants'

const FILTER_TITLES = Object.keys(toDoFilters).reduce((filterTitleObj, filterKey) => {
    filterTitleObj[toDoFilters[filterKey]] = filterKey.split('_')[1].toLocaleLowerCase()
    return filterTitleObj
}, {})

const Footer = ({ activeCount, completedCount, clearCompleted }) => {
    const itemWord = activeCount > 1 ? 'items' : 'item'
    return <footer className="footer">
        <span className='todo-count'><strong>{activeCount}</strong> {itemWord} left</span>
        <ul className="filters">
            {Object.keys(FILTER_TITLES).map(key => {
                return <li key={key}>
                    <FilterLink filter={key}>
                        {FILTER_TITLES[key]}
                    </FilterLink>
                </li>
            })}
        </ul>
        {
            !!completedCount
            &&
            <button
                onClick={clearCompleted}
                className="clear-completed">
                Clear Completed
            </button>
        }

    </footer>
}

Footer.propTypes = {
    activeCount: PropTypes.number.isRequired,
    completedCount: PropTypes.number.isRequired,
    clearCompleted: PropTypes.func.isRequired
}

export default Footer