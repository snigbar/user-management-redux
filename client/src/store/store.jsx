import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slice/UserSlice.jsx'
import {serverApi} from '../API/api.jsx'
import { setupListeners } from '@reduxjs/toolkit/query';


const store = configureStore({
    reducer: {
        users: userReducer,
        [serverApi.reducerPath]: serverApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverApi.middleware),
})

setupListeners(store.dispatch);
export default store