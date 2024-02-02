import React from 'react'
import PropTypes from 'prop-types'
import { FaHeart } from 'react-icons/fa'

import Button from 'components/Button'
import RangeSlide from 'components/RangeSlide'
import TextField from 'components/TextField'
import Select from 'components/Select'

const FilterBar = ({
  filtersList,
  highestPrice,
  isModalOpen,
  onClickClear,
  onClickSearch,
  setFiltersList,
  setIsModalOpen
}) => {
  const onChangeBedrooms = (e) => {
    setFiltersList({ ...filtersList, bedrooms: e.target.value })
  }

  const onChangeBathrooms = (e) => {
    setFiltersList({ ...filtersList, bathrooms: e.target.value })
  }

  const onChangePark = (e) => {
    setFiltersList({ ...filtersList, park: e.target.value })
  }

  const onChangePrice = (e) => {
    setFiltersList({ ...filtersList, priceRange: e.target.value })
  }

  const onChangeSearchText = (e) => {
    setFiltersList({ ...filtersList, searchText: e.target.value })
  }

  return (
    <section>
      <TextField onChange={onChangeSearchText} value={filtersList.searchText} placeHolder='Search...' type='search' id='seachInput' className='mb-10' />
      <div className='flex justify-between'>
        <Select label='Bedrooms' onChange={onChangeBedrooms} value={filtersList.bedrooms} />
        <Select label='Bathrooms' onChange={onChangeBathrooms} value={filtersList.bathrooms} />
        <Select label='Park' onChange={onChangePark} value={filtersList.park} />
        <RangeSlide label='Price Range' onChange={onChangePrice} value={filtersList.priceRange} maxValue={highestPrice} />
        <div>
          <Button id='search-button' variant='primary' onClick={onClickSearch}>Search</Button>
          <Button id='clear-button' variant='secondary' className='ml-2' onClick={onClickClear}>Clear</Button>
        </div>
      </div>

      <div className='flex justify-end mt-2'>
        <Button id='savedPropertiesButton' variant='tertiary' onClick={() => setIsModalOpen(!isModalOpen)} className='flex' ><FaHeart className='mr-3 mt-1 justify-end' /> See saved properties</Button>
      </div>
    </section>
  )
}

FilterBar.propTypes = {
  filtersList: PropTypes.object,
  highestPrice: PropTypes.number,
  isModalOpen: PropTypes.bool.isRequired,
  onClickClear: PropTypes.func.isRequired,
  onClickSearch: PropTypes.func.isRequired,
  setFiltersList: PropTypes.func,
  setIsModalOpen: PropTypes.func.isRequired
}

export default FilterBar
