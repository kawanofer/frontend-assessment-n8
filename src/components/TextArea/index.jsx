import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({ onChange, rows = 10, cols = 50, id, placeHolder, className, value, ...props }) => {
  return (
    <textarea
      {...props}
      className={`w-full px-5 py-5 mb-5 border rounded-md leading-tight focus:outline-none text-lg ${className}`}
      cols={cols}
      id={id}
      onChange={onChange}
      placeholder={placeHolder}
      rows={rows}
      value={value}
    />
  )
}

TextArea.propTypes = {
  className: PropTypes.string,
  cols: PropTypes.number,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string
}

export default TextArea
