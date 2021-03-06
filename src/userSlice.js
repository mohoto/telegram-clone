import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'login',
    initialState: {
        user: null
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        }
    }
})

export const { loginUser, logout } = userSlice.actions;

export const selectUser = state => state.login.user;

const userReducer = userSlice.reducer;

export default userReducer;