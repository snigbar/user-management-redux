import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slice/UserSlice.jsx'


const store = configureStore({
    reducer: {
        users: userReducer
    }
})


export default store