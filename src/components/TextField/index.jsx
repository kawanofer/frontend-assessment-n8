import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({ onChange, type = 'text', id, value = '', placeHolder, className, ...props }) => {
  return (
    <input
      {...props}
      className={`w-full px-5 py-5 mb-5 border rounded-md leading-tight focus:outline-none text-lg ${className}`}
      id={id}
      onChange={onChange}
      placeholder={placeHolder}
      type={type}
      value={value}
    />
  )
}

TextField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
}

export default TextField
