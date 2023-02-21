import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const DefaultLayout = ({children}) => {
  return (
    <div>
        <Header/>
        <div>{children}</div>
        <Footer/>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
