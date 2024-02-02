import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const PropertyContext = createContext({})

export const PropertyProvider = ({ children }) => {
  const [storePropertyData, setstorePropertyData] = useState([])

  return (
    <PropertyContext.Provider value={{ storePropertyData, setstorePropertyData }}>
      {children}
    </PropertyContext.Provider>
  )
}

PropertyProvider.propTypes = {
  children: PropTypes.node.isRequired
}
