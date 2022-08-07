import axios from "axios";

export const getAllCategories= ()=>{
    return new Promise(async (resolve,reject)=>{
        try {
            const result =  await axios.get(
                 'http://localhost:3001/v1/category',
                 {headers:{
                     Authorization:sessionStorage.getItem('accessJWT')
                 }}
     
             )
             resolve(result)
         } catch (error) {
             reject(error)
         }
    })
   
}