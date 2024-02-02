import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ id, disabled = false, children, type = 'button', onClick, className, variant = 'primary', ...props }) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        if (disabled) {
          return 'text-button-textDisabled active:bg-button-backgroundDisabled bg-button-backgroundDisabled'
        }
        return 'active:bg-primary-dark text-white bg-primary-main hover:bg-primary-light'
      case 'secondary':
        if (disabled) {
          return 'text-button-textDisabled border bg-white hover:bg-white'
        }
        return 'bg-white border hover:bg-[#e0f2fe] text-dark'
      case 'tertiary':
        if (disabled) {
          return 'text-button-textDisabled bg-white hover:bg-white text-primary-dark'
        }
        return 'bg-white hover:bg-[#e0f2fe] text-dark text-primary-dark'
    }
  }

  return (
    <button
      {...props}
      className={`rounded-md px-4 py-2 ${getButtonStyles()} ${className}`}
      disabled={disabled}
      id={`button_${id}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string
}

export default Button
