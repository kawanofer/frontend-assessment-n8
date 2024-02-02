import React from 'react'
import { FaBed, FaBath, FaParking, FaRuler, FaCalendarAlt } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Tooltip from 'components/Tooltip'

const PropertyDescriptionIcon = ({ bedrooms, bathrooms, parking, sqft, yearBuilt, description }) => {
  return (
    <>
      <div className='flex justify-between mt-5 border p-5 border-grey'>
        <div className='text-center'>
          <Tooltip id='bedrooms' text='Bedrooms'>
            <FaBed size={50} className='text-grey' title='Bed' />
            <div className='mt-4 text-2xl'>{bedrooms}</div>
          </Tooltip>
        </div>
        <div className='text-center'>
          <Tooltip id='bathrooms' text='Bathrooms'>
            <FaBath size={50} className='text-grey' title='Bath' />
            <div className='mt-4 text-2xl'>{bathrooms}</div>
          </Tooltip>
        </div>
        <div className='text-center'>
          <Tooltip id='parking' text='Parking'>
            <FaParking size={50} className='text-grey' title='Parking' />
            <div className='mt-4 text-2xl'>{parking}</div>
          </Tooltip>
        </div>
        <div className='text-center'>
          <Tooltip id='SQFT' text='SQFT'>
            <FaRuler size={50} className='text-grey' title='SQFT' />
            <div className='mt-4 text-2xl'>{sqft}</div>
          </Tooltip>
        </div>
        <div className='text-center'>
          <Tooltip id='YearBuilt' text='Year Built' >
            <FaCalendarAlt size={50} className='text-grey' title='Year Built' />
            <div className='mt-4 text-2xl'>{yearBuilt}</div>
          </Tooltip>
        </div>
      </div>

      <div className='text-lg mt-5'>
        {description}
      </div>
    </>
  )
}

PropertyDescriptionIcon.propTypes = {
  bathrooms: PropTypes.number,
  bedrooms: PropTypes.number,
  description: PropTypes.string,
  parking: PropTypes.number,
  sqft: PropTypes.number,
  yearBuilt: PropTypes.number
}

export default PropertyDescriptionIcon
