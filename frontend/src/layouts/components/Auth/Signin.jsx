import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinUser, signinGoogle } from "../../../services/authService";
import { AuthModalContext } from "../Header/Header";
import ForgotPassword from "./ForgotPassword";
import Signup from "./Signup";
import axios from "axios";
const Signin = (props) => {
  const value = useContext(AuthModalContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password,
    };

    signinUser(newUser, dispatch, navigate);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    value.handleSetAuthModalChildren(<ForgotPassword />);
  };
  useEffect(() => {
    const clientId = "317627420832-9i9fjr23mdcpcl1nd15s6rv0c3dk0fjd.apps.googleusercontent.com";
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  const responseGoogle = async (response) => {
    console.log(response);
    try {
      signinGoogle(response.tokenId, dispatch, navigate);
    } catch (error) {
      
    }
  };

  return (
    <div className="px-6">
      <h3 className="my-5 text-center">Đăng nhập</h3>
      <div>
        <form action="" className="flex flex-col mt-7" onSubmit={handleSubmit}>
          <label htmlFor="">Tài khoản</label>
          <input
            type="text"
            placeholder="Nhập tài khoản hoặc email"
            className="mt-2 border outline-none px-3 h-10 rounded-md"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label htmlFor="" className="mt-5">
            Mật khẩu
          </label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            className="mt-2 border outline-none px-3 h-10 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="mt-5 bg-red-500 w-max px-4 py-1 text-white rounded"
            >
              Đăng nhập
            </button>
            <a
              href=""
              className="hover:text-blue-500"
              onClick={handleForgotPassword}
            >
              Quên mật khẩu ?
            </a>
          </div>
          {/* social login (google) */}
          <div className="mt-4">
            <h3 className="text-sm font-thin mb-3">Hoặc đăng nhập với: </h3>
            <GoogleLogin
              clientId="317627420832-9i9fjr23mdcpcl1nd15s6rv0c3dk0fjd.apps.googleusercontent.com"
              buttonText="Đăng nhập với google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            
          </div>
          <p className="mt-5">
            Chưa có tài khoản?{" "}
            <span
              onClick={() => value.handleSetAuthModalChildren(<Signup />)}
              className="text-blue-500 cursor-pointer"
            >
              đăng ký
            </span>{" "}
            tại đây
          </p>
        </form>
      </div>
    </div>
  );
};

Signin.propTypes = {};

export default Signin;
