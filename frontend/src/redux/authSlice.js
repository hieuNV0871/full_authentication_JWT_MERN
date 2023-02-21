import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        signin: {
            currentUser: null,
            isFetching: false,
            error: false,
            isLogged: false
        },
        signup: {
            isFetching: false,
            error: false,
            success: false
        }
    },
    reducers: {
        signinStart: state => {
            state.signin.isFetching = true
        },
        signinSuccess: (state, action) => {
            state.signin.isFetching = false
            state.signin.currentUser = action.payload
            state.signin.error = false
            state.signin.isLogged = true
        },
        signinFailed: state => {
            state.signin.isFetching = false
            state.signin.error = true
        },

        signupStart: state => {
            state.signup.isFetching = true
        },
        signupSuccess: state => {
            state.signup.isFetching = false
            state.signup.success = true
            state.signup.error = false
        },
        signupFailed: state => {
            state.signup.isFetching = false
            state.signup.error = true,
            state.signup.success = false
        },
        signoutStart: state => {
            state.signin.isFetching = true;

        },
        signoutSuccess: state => {
            state.signin.isFetching = false,
            state.signin.currentUser = null;
            state.signin.error = false;
            state.signin.isLogged = false
        },
        signoutFailed: state => {
            state.signin.error = true;
            state.signin.isFetching = false
        }
    }
})

export const {
    signinStart,
    signinFailed,
    signinSuccess,
    signupFailed,
    signupSuccess,
    signupStart,
    signoutFailed,
    signoutStart,
    signoutSuccess
} = authSlice.actions

export default authSlice.reducer