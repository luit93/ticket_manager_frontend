import axios from "axios";

export const getAllCategories= ()=>{
    return new Promise(async (resolve,reject)=>{
        try {
            const result =  await axios.get(
                 'http://localhost:3001/v1/category',
                 {headers:{
                     Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld3VzZXJAcy5jb20iLCJpYXQiOjE2NTk3NTE4MzksImV4cCI6MTY1OTgzODIzOX0.Qfc_yR-1aooll71Ex80roD3jdKRPgKuzBsbyfR6ot-Q'
                 }}
     
             )
             resolve(result)
         } catch (error) {
             reject(error)
         }
    })
   
}