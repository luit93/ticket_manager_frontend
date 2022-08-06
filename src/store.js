import { createSlice, configureStore } from '@reduxjs/toolkit'
import categoryListReducer from "./pages/category/categoryListSlice"
import loginReducer from './components/login/loginSlice'
const store = configureStore({
    reducer:{
        categories:categoryListReducer,
        login:loginReducer
    }
})

export default store