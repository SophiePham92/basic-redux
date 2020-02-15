import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Link = ({ active, children, onclick }) => {
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return <a
        className={classnames({ selected: active })}
        style={{ cursor: 'pointer' }}
        onClick={e => {
            e.preventDefault();
            onclick()
        }}
    >
        {children}
    </a>
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onclick: PropTypes.func.isRequired
}

export default Link