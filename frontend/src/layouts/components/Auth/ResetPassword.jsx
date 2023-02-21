import React, {useState} from 'react'
import PropTypes from 'prop-types'

import { resetPassword } from '../../../services/authService';
import { useNavigate, useParams } from 'react-router-dom';
const ResetPassword = props => {
    const [password, setPassword] = useState("");
    const [cfPassword, setCfPassword] = useState("");
    const {reset_token} = useParams()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(password !== cfPassword) return 0
        resetPassword({password}, reset_token,navigate)

    }
  return (
    <div className="px-6 w-1/2 mx-auto">
      <h3 className="my-2 text-center">Reset password</h3>
      <div>
        <form action="" className="flex flex-col mt-5" onSubmit={handleSubmit}>
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
              Cập nhật mật khẩu
            </button>
            
          
          <p className="mt-5">
            Đã có tài khoản? <span onClick={()=>value.handleSetAuthModalChildren(<Signin/>)} className="text-blue-500 cursor-pointer">đăng nhập</span> ngay
          </p>
        </form>
      </div>
    </div>
  )
}

ResetPassword.propTypes = {

}

export default ResetPassword
