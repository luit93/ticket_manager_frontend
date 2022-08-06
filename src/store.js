import { createSlice, configureStore } from '@reduxjs/toolkit'
import categoryListReducer from "./pages/category/categoryListSlice"
import loginReducer from './components/login/loginSlice'
import userReducer from './pages/dashboard/userSlice'
const store = configureStore({
    reducer:{
        categories:categoryListReducer,
        login:loginReducer,
        user:userReducer
    }
})

export default store