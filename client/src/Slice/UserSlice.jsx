import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users:[]
    },
    reducers:{
       setUsers(state, action){
        state.users = action.payload
       },
       addUser(state, action) {
        state.users = [...state.users, action.payload]
       }
    }

})

export const {setUsers} = userSlice.actions
export default userSlice.reducer