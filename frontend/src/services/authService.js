import axios from "axios";
import * as request from "../utils/request"
import {signinFailed, signinStart, signinSuccess, signupFailed, signupStart, signupSuccess, signoutFailed, signoutStart, signoutSuccess} from "../redux/authSlice"



export const signinUser = async (user, dispatch, navigate) => {
  dispatch(signinStart())
  try {
    const res = await axios.post("http://localhost:5000/v1/auth/signin", user);
    dispatch(signinSuccess(res.data))
    navigate("/")
    window.location.reload();

  } catch (error) {
    dispatch(signinFailed())
  }
};
export const signinGoogle = async (tokenId, dispatch, navigate) => {
  dispatch(signinStart())
  try {
    const res = await axios.post("http://localhost:5000/v1/auth/google_login", {tokenId: tokenId})
    dispatch(signinSuccess(res.data))
    navigate("/")
    window.location.reload();

  } catch (error) {
    dispatch(signinFailed())
  }
};

export const signupUser = async (user, dispatch, navigate) => {
  dispatch(signupStart())
  try {
    const res = await request.post("auth/signup", user);
    dispatch(signupSuccess(res.data))
    navigate("/")

  } catch (error) {
    dispatch(signupFailed())
  }
};

export const activationEmail = async (activeToken)=>{
  try {
    const res = await request.post("auth/activation", activeToken)
    return res.data
  } catch (error) {
    console.log(error)
  }
}


export const forgotPassword = async (email)=>{
  try {
    const res = await request.post("auth/forgot_password", email)
    // return res.data
  } catch (error) {
    console.log(error)
    
  }
}

export const resetPassword = async (password, reset_token, navigate) => {
  try {
    const res = await axios.post("http://localhost:5000/v1/auth/reset_password", password, {headers: {'Authorization': reset_token}})
    navigate("/")
  } catch (error) {
    console.log(error)
  }
}

export const signout = async (dispatch, navigate) => {
  dispatch(signoutStart());
  try {
    await axios.post("http://localhost:5000/v1/auth/signout", dispatch, navigate);
    dispatch(signoutSuccess());
    navigate("/");
  } catch (err) {
    dispatch(signoutFailed());
  }
};

