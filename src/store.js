import { createSlice, configureStore } from '@reduxjs/toolkit'
import categoryListReducer from "./pages/category/categoryListSlice"
const store = configureStore({
    reducer:{
        categories:categoryListReducer
    }
})

export default store