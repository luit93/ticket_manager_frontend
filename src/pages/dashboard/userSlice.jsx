import { createSlice } from "@reduxjs/toolkit";


const initialState={
    user:{},
    isLoading:false,
    error:''
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        fetchUserPending:(state)=>{
            state.isLoading = true
        },
        fetchUserSuccess:(state,action)=>{
            state.isLoading=false
            state.error = ''
            state.user= action.payload
        },
        fetchUserFail:(state,{payload})=>{
            state.isLoading=false
            state.error= payload
        }

    }
})


export const {fetchUserPending,fetchUserSuccess,fetchUserFail} = userSlice.actions

export default userSlice.reducer