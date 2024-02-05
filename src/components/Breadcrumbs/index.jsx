import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import Button from 'components/Button'

function Breadcrumbs({ links }) {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/')
  }

  return (
    <div className='flex items-center'>
      <Button
        className='mr-1'
        onClick={handleBackClick}
        variant='tertiary'
      >
        <FaChevronLeft />
      </Button>
      {links?.map((link, index) => (
        <span key={link.label} style={{ fontSize: '14px' }}>
          {index < (links.length - 1)
            ? (
              <>
                <Link to={link.route}>
                  {link.label}
                </Link>
                <span className='mx-2 crumb-separator'>/</span>
              </>)
            :
            <div>{link.label}</div>
          }
        </span>
      ))}
    </div>
  )
}

Breadcrumbs.propTypes = {
  links: PropTypes.array.isRequired
}

export default Breadcrumbs
