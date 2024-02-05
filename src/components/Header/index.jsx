import React from 'react'
import { isEmpty } from 'lodash'
import PropTypes from 'prop-types'

import Breadcrumbs from 'components/Breadcrumbs'

const Header = ({ breadcrumb }) => {
  return (
    <header>
      {!isEmpty(breadcrumb) && <Breadcrumbs links={breadcrumb} />}
      <h1 className='mb-8 text-center text-primary-dark font-bold text-3xl'>Number 8</h1>
    </header >
  )
}

Header.propTypes = {
  breadcrumb: PropTypes.array
}

export default Header
