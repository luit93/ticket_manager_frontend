import {fetchCategoryListLoading,fetchCategoryListSuccess,fetchCategoryListFail,searchCategories} from './categoryListSlice'
import {getAllCategories} from '../../api/categoryApi'
export const fetchAllCategories=()=> async (dispatch)=>{
    dispatch(fetchCategoryListLoading())
    try {
        //fetch data from api
        const result =await getAllCategories()
        console.log(result.data.categories)
        dispatch(fetchCategoryListSuccess(result.data.categories))
    } catch (error) {
        dispatch(fetchCategoryListFail(error.message))
    }
    
}

export const filterSearchCategories=(str)=> async (dispatch)=>{
    dispatch(searchCategories(str))
}