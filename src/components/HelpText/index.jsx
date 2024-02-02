import React from 'react'
import PropTypes from 'prop-types'

const HelpText = ({ children, className }) => {
  return (
    <span className={`text-secondary-main text-left ${className}`}>
      {children}
    </span>
  )
}

HelpText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default HelpText
