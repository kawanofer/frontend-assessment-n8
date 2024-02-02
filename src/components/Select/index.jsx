import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ onChange, label, className, options, value, ...props }) => {
  return (
    <div className={className}>
      <label className='text-lg'>{label}:</label>
      <select
        {...props}
        onChange={onChange}
        value={value}
        className='w-32 h-8 text-lg relative overflow-hidden border rounded ml-2'
      >
        {options?.map(item => {
          return <option key={item.label} value={item.value}>{item.label}</option>
        })}
      </select>
    </div>
  )
}

Select.defaultProps = {
  options: [
    { label: '', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 }
  ]
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.number
}

export default Select
