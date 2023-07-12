import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users:[]
    },
    reducers:{
        add(){

        },
        update(){

        }
    }

})

export const {add, remove} = userSlice.actions
export default userSlice.reducer