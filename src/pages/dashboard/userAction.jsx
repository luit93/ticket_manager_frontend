import {fetchUserPending,fetchUserSuccess,fetchUserFail} from './userSlice'
import { getUser } from '../../api/userApi'

export const getUserProfile=()=>async dispatch=>{
    
try {
    dispatch(fetchUserPending())
    const result = await getUser()
     if(result.userProfile && result.userProfile._id){
        return dispatch(fetchUserSuccess(result.userProfile))
     }
    dispatch(fetchUserFail("user not found"))
} catch (error) {
    dispatch(fetchUserFail(error))
}
}