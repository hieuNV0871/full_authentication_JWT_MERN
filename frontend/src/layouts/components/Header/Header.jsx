import React, { useState , createContext, useEffect} from 'react'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'
import {Modal as AuthModal} from '../Auth/auth'
import Signin from '../Auth/Signin'
import { signout } from '../../../services/authService'
import { useNavigate } from 'react-router-dom'
export const AuthModalContext = createContext()
const Header = props => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const auth = useSelector(state=>state.auth.signin)
    const {isLogged} = auth
    const [showAuthModal, setShowAuthModal] = useState(false)
    const [authModalChildren, setAuthModalChildren]  = useState(<Signin/>)
    const handleSetAuthModalChildren = value => {
        setAuthModalChildren(value ?? <Signin/>)
    }
    const valueContext = {
        handleSetAuthModalChildren
    }

    const handleSignout = (e)=> {
        e.preventDefault()
        signout(dispatch, navigate)
    }

  return (
    <div className='flex justify-center gap-x-5 items-center mt-2'>

        <h2 className='font-bold text-3xl'>Header: </h2>
        {
            isLogged ? (
                <div className='flex gap-x-3'>
                    
                    <button onClick={handleSignout} className='hover:text-red-500 text-xl border rounded px-2 py-1'>sign out</button>

                </div>
            ) :(
                <button onClick={()=>setShowAuthModal(true)}
                className = 'hover:text-red-500 text-xl border rounded px-2 py-1'
        >sign in</button>
            )
        }
        <div>

            <AuthModalContext.Provider value={valueContext}>
            {
                showAuthModal && (
                    <AuthModal
                        onClose = {()=>{
                            setShowAuthModal(false)
                            setAuthModalChildren(<Signin/>)
                        }}
                    >
                        {authModalChildren}
                    </AuthModal>
                )
            }
            </AuthModalContext.Provider>
        </div>
    </div>
  )
}

Header.propTypes = {

}

export default Header
