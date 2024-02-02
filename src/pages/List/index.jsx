import React, { useState, useEffect } from 'react'
import { FaHeart } from 'react-icons/fa'
import { maxBy } from 'lodash'
import axios from 'axios'
import toast from 'react-hot-toast'

import FilterBar from './FilterBar'
import Header from 'components/Header'
import PropertyCard from './PropertyCard'
import Modal from 'components/Modal'
import Button from 'components/Button'

const List = () => {
  const [propertysList, setPropertysList] = useState([])
  const [filtersList, setFiltersList] = useState({ bathrooms: 0, bedrooms: 0, park: 0, priceRange: 0, searchText: '' })
  const [filteredPropertyList, setFilteredPropertyList] = useState([])
  const [highestPrice, setHighestPrice] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    getPropertyData()
  }, [])

  const getPropertyData = async () => {
    const url = 'cdn.number8.com/LA/listings.json'
    axios.get(url)
      .then(response => {
        const data = response.data
        setPropertysList(data)
        setFilteredPropertyList(data)
        getHighestPrice(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error.message)
        toast.error('Error fetching data:', error.message)
      })
  }

  const getHighestPrice = (list) => {
    setHighestPrice(maxBy(list, 'Sale Price')['Sale Price'])
  }

  const handleClearFilter = () => {
    setFiltersList({
      bedrooms: 0,
      bathrooms: 0,
      park: 0,
      priceRange: 0,
      searchText: ''
    })
    setFilteredPropertyList([])
    setHighestPrice(0)
    setFilteredPropertyList(propertysList)
  }

  const handleFilter = () => {
    const results = propertysList.filter(room => (
      (!Number(filtersList.bedrooms) || Number(filtersList.bedrooms) >= room.Bedrooms) &&
      (!Number(filtersList.bathrooms) || Number(filtersList.bathrooms) >= room.Bathrooms) &&
      (!Number(filtersList.park) || Number(filtersList.park) >= room.Parking) &&
      (!Number(filtersList.priceRange) || Number(filtersList.priceRange) >= room['Sale Price']) &&
      (room.Title.toLowerCase().indexOf(filtersList.searchText.toLowerCase()) > -1)
    ))
    setFilteredPropertyList(results)
  }

  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleClearSavedProperties = () => {
    localStorage.setItem('propertiesSaved', JSON.stringify([]))
    handleCloseModal()
  }

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      <FilterBar
        filtersList={filtersList}
        highestPrice={highestPrice}
        isModalOpen={isModalOpen}
        onClickClear={handleClearFilter}
        onClickSearch={handleFilter}
        setFiltersList={setFiltersList}
        setIsModalOpen={setIsModalOpen}
      />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title='Saved Properties'>
        <div>
          {
            JSON.parse(window.localStorage.getItem('propertiesSaved')).map(item => (
              <span key={item.Id} className='flex mb-2'>
                <FaHeart className='mt-1 mr-3' />
                <h3 key={item.Id}>{item.Title}</h3>
              </span>
            ))
          }
        </div>
        <div className='flex justify-end'>
          <Button id='clearListButton' variant='tertiary' onClick={handleClearSavedProperties}>Clear List</Button>
        </div>
      </Modal>
      <PropertyCard propertysList={filteredPropertyList} />
    </>
  )
}

export default List
