import React from 'react'
import PropTypes from 'prop-types'
import { formatCurrency } from 'utils/formatCurrency'

const RangeSlide = ({ onChange, label, className, maxValue = 1000, value, ...props }) => {
  return (
    <div className={className}>
      <label className='text-lg'>{label}:</label>
      <input
        {...props}
        onChange={onChange}
        className='ml-2 w-40' id='pi_input' type='range' min='0' max={maxValue} step='100'
      />
      <span className='text-lg ml-2'>{formatCurrency(value)}</span>
    </div>
  )
}

RangeSlide.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  maxValue: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number
}

export default RangeSlide
