import React from 'react'
import FilterLink from '../containers/FilterLink'
import { visibilityFilters } from '../store/actions'

const Footer = () => (
    <p>
        Show: <FilterLink filter={visibilityFilters.SHOW_ALL}>All</FilterLink>
        {', '}
        <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        {', '}
        <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </p>
)
export default Footer