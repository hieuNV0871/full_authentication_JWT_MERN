import React, {useContext, useState} from 'react'
import PropTypes from 'prop-types'

import {AuthModalContext} from "../Header/Header"
import Signin from './Signin'
import { signupUser } from '../../../services/authService'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Signup = props => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cfPassword, setCfPassword] = useState("");
    const [email, setEmail] = useState("");

    const value = useContext(AuthModalContext)
    const handleSubmit = e => {
        e.preventDefault()
        if(password !== cfPassword) return 0
        const newUser = {
            username, email, password
        }
        signupUser(newUser, dispatch, navigate)
    }
  return (
    <div className="px-6">
      <h3 className="my-2 text-center">Đăng ký</h3>
      <div>
        <form action="" className="flex flex-col mt-5" onSubmit={handleSubmit}>
          <label htmlFor="">Tài khoản</label>
          <input
            type="text"
            placeholder="Nhập tài khoản"
            className="mt-1 border outline-none px-3 h-10 rounded-md"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Nhập địa chỉ email"
            className="mt-1 border outline-none px-3 h-10 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          
          <label htmlFor="" className="mt-1">
            Mật khẩu
          </label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            className="mt-1 border outline-none px-3 h-10 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label htmlFor="" className="mt-1">
            Nhập lại mật khẩu
          </label>
          <input
            type="password"
            placeholder="Xác nhận mật khẩu"
            className="mt-1 border outline-none px-3 h-10 rounded-md"
            onChange={(e) => setCfPassword(e.target.value)}
            value={cfPassword}
          />
          
            <button
              type="submit"
              className="mt-5 bg-red-500 w-max px-4 py-1 text-white rounded"
            >
              Đăng ký
            </button>
            
          
          <p className="mt-5">
            Đã có tài khoản? <span onClick={()=>value.handleSetAuthModalChildren(<Signin/>)} className="text-blue-500 cursor-pointer">đăng nhập</span> ngay
          </p>
        </form>
      </div>
    </div>
  )
}

Signup.propTypes = {

}

export default Signup
