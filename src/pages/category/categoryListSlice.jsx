import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  isLoading: false,
  searchList:[],
  error: "",
};
const categoryListSlice = createSlice({
  name: "categoryList",
  initialState,
  reducers: {
    fetchCategoryListLoading: (state) => {
      state.isLoading = true;
    },
    fetchCategoryListSuccess: (state, action) => {
      state.categories = action.payload;
      state.searchList = action.payload
      state.isLoading = false;
    },
    fetchCategoryListFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    searchCategories: (state, {payload}) => {
      state.searchList = state.categories.filter(row =>{
        if(!payload) return row
        return row.name.toLowerCase().includes(payload.toLowerCase())
      })
      
    }
  },
});

const {reducer,actions} = categoryListSlice

export const {fetchCategoryListLoading,fetchCategoryListSuccess,fetchCategoryListFail,searchCategories}= actions

export default reducer