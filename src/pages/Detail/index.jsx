import React, { useContext } from 'react'
import { FaHeart, FaShareAlt } from 'react-icons/fa'
import { isEmpty } from 'lodash'
import toast from 'react-hot-toast'

import Button from 'components/Button'
import Header from 'components/Header'
import Tooltip from 'components/Tooltip'

import ContactAgentForm from './ContactAgentForm'
import PropertyDescriptionIcon from './PropertyDescription'
import TitleImage from './TitleImage'

import { PropertyContext } from 'store/context/PropertyContext'

const Detail = () => {
  const { storePropertyData } = useContext(PropertyContext)

  const localStoragePropertysData = JSON.parse(window.localStorage.getItem('propertysData'))
  let propertyData = {}
  if (!isEmpty(storePropertyData)) {
    propertyData = storePropertyData
  } else {
    propertyData = localStoragePropertysData
  }

  const handleSaveProperty = () => {
    const propertiesSaved = JSON.parse(window.localStorage.getItem('propertiesSaved')) || []
    propertiesSaved.push(propertyData)
    localStorage.setItem('propertiesSaved', JSON.stringify(propertiesSaved))

    toast(() => (
      <span>
        Property <b>{propertyData?.Title}</b> saved successfully!
      </span>
    ), {
      icon: <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'></path></svg>,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff'
      }
    })
  }

  return (
    <>
      <Header />
      <section>
        <div className='grid grid-cols-5 grid-rows-1 gap-4'>
          <div className='flex flex-col col-span-3'>
            {/* TITLE AND IMAGE */}
            <TitleImage
              dateListed={propertyData?.DateListed}
              location={propertyData?.Location}
              pictureURL={propertyData?.PictureURL}
              salePrice={propertyData['Sale Price']}
              title={propertyData?.Title}
            />
            {/* HOTEL DESCRIPTION + ICONS */}
            <PropertyDescriptionIcon
              bathrooms={propertyData?.Bathrooms}
              bedrooms={propertyData?.Bedrooms}
              description={propertyData?.Description}
              parking={propertyData?.Parking}
              sqft={propertyData?.Sqft}
              yearBuilt={propertyData?.YearBuilt}
            />
          </div>
          <div className='flex flex-col col-span-2'>
            <div className='mb-6 text-right'>
              <Tooltip text='Save Property' id='saveProperty'>
                <Button onClick={handleSaveProperty} id='iconSave' variant='onlyIcon'
                  className='mb-5 w-12 text-center text-white bg-secondary-main hover:bg-secondary-light active:bg-secondary-dark'>
                  <FaHeart />
                </Button>
              </Tooltip>

              <Tooltip text='Share with friends' id='saveProperty'>
                <Button
                  id='iconShare'
                  className='w-12 text-center ml-3'
                  onClick={() => toast('Sharing with friends')}
                  title='Share with friends'
                  variant='secondary'
                >
                  <FaShareAlt />
                </Button>
              </Tooltip>
            </div>
            {/* CONTACT AGENT FORM */}
            <ContactAgentForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default Detail
