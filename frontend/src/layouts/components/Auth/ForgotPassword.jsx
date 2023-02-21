import React, {useContext, useState} from 'react'
import PropTypes from 'prop-types'

import {AuthModalContext} from "../Header/Header"
import Signup from './Signup'
import Signin from './Signin'
import { ChevronLeftIcon } from '../../../components/Icon/Icon'
import { forgotPassword } from '../../../services/authService'
const ForgotPassword = props => {
  const [email, setEmail] = useState("");
  const value = useContext(AuthModalContext)
  const handleSubmit = e => {
    e.preventDefault()
    forgotPassword({email})
  }
  return (
    <div className="px-6 relative">
      <div 
        onClick={()=>value.handleSetAuthModalChildren(<Signin/>)}
        className='absolute cursor-pointer top-[-25px] p-1'>
        <ChevronLeftIcon className="w-6 h-6 text-black/30 hover:text-black"/>
      </div>
      <h3 className="my-5 text-center">Quên mật khẩu</h3>
      <div>
        <form action="" className="flex flex-col mt-7" onSubmit={handleSubmit}>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Nhập tài khoản email"
            className="mt-2 border outline-none px-3 h-10 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="mt-5 bg-red-500 w-max px-4 py-1 text-white rounded"
            >
              Gửi mail xác nhận
            </button>
          </div>
          <p className="mt-5">
            Chưa có tài khoản? <span onClick={()=>value.handleSetAuthModalChildren(<Signup/>)} className="text-blue-500 cursor-pointer">đăng ký</span> tại đây
          </p>
        </form>
      </div>
    </div>
  )
}

ForgotPassword.propTypes = {

}

export default ForgotPassword
