import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import threadReducer from './threadSlice'

const store = configureStore({
    reducer: {
        login: userReducer,
        thread: threadReducer
    }
})
export default store;
