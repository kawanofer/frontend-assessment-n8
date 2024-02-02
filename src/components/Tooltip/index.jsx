import React from 'react'
import { Tooltip } from 'react-tooltip'
import PropTypes from 'prop-types'

const TooltipComp = ({ children, text, id }) => {
  return (
    <>
      <a data-tooltip-id={id} data-tooltip-content={text}>
        {children}
      </a>
      <Tooltip id={id} />
    </>
  )
}

TooltipComp.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default TooltipComp
