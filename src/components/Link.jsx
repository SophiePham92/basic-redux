import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onclick }) => {
    return active ?
        <span>{children}</span>
        :
        <a onClick={e => {
            e.preventDefault();
            onclick()
        }}
        >{children}</a>
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onclick: PropTypes.func.isRequired
}

export default Link