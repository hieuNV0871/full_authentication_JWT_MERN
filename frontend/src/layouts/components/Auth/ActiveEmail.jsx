import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { activationEmail } from '../../../services/authService'
import axios from 'axios'

const ActiveEmail = props => {
  const {activation_token} = useParams()
  useEffect(()=>{
    activationEmail({activation_token})    
  }, [])

  return (
    <div>
      active email
    </div>
  )
}

ActiveEmail.propTypes = {

}

export default ActiveEmail
