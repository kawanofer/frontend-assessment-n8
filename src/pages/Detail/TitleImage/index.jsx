import React from 'react'
import { formatCurrency } from 'utils/formatCurrency'
import moment from 'moment'
import PropTypes from 'prop-types'

const TitleImage = ({ title, location, salePrice, dateListed, pictureURL }) => {
  return (
    <>
      <div className='flex justify-between pb-3'>
        <div>
          <h2 className='text-bold text-2xl'>{title}</h2>
          <p className='text-lg text-darkGrey'>{location}</p>
        </div>
        <div className='text-right'>
          <p className='text-3xl'>{formatCurrency(salePrice)}</p>
          <p className='text-xl text-grey'>Date Listed: {moment(dateListed).format('MMM DD, YYYY')}</p>
        </div>
      </div>
      <img alt={title}
        style={{
          height: '350px',
          backgroundImage: `url(${pictureURL})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        }} />
    </>
  )
}

TitleImage.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  salePrice: PropTypes.number,
  dateListed: PropTypes.string,
  pictureURL: PropTypes.string
}

export default TitleImage
