import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import { formatCurrency } from 'utils/formatCurrency'
import { PropertyContext } from 'store/context/PropertyContext'
import Button from 'components/Button'

const PropertyCard = ({ propertysList }) => {
  const navigate = useNavigate()
  const { setstorePropertyData } = useContext(PropertyContext)

  if (propertysList.length === 0) {
    return <span className='flex justify-center mt-10 text-lg text-secondary-light'>The search did not find any records</span>
  }

  const handleViewDetail = (item) => {
    setstorePropertyData(item)
    localStorage.setItem('propertysData', JSON.stringify(item))
    navigate(`/detail/${item.Id}`)
  }

  return (
    <div className='flex mt-10 gap-4 flex-wrap'>
      {propertysList?.map(item => {
        return (
          <div key={item.Id} className='flex flex-col mb-6 md:mx-0 mx-auto overflow-hidden p-3 w-11rem border border-solid rounded-md'>
            <div className='overflow-hidden'>
              <img
                src={item.ThumbnailURL}
                alt={item.Title}
                width={150}
                height={150}
                className='img scale-animation'
              />
            </div>

            <div className='pt-2 flex-grow'>
              <div className='font-semibold text-lg'>
                <p>{item.Title}</p>
              </div>
              <p className='text-darkGrey'>{item.Location}</p>
            </div>
            <p className='pt-3 pb-3 text-md'>{item.Bedrooms} beds | {item.Bathrooms} baths</p>
            <p className='pb-3 text-2xl'>{formatCurrency(item['Sale Price'])}</p>
            <Button id='viewDetails' variant='primary' onClick={() => handleViewDetail(item)}>View Details</Button>
          </div>
        )
      })}
    </div >
  )
}

PropertyCard.propTypes = {
  propertysList: PropTypes.array
}

export default PropertyCard
