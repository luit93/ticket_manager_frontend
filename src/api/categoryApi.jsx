import axios from "axios";

export const getAllCategories= ()=>{
    return new Promise(async (resolve,reject)=>{
        try {
            const result =  await axios.get(
                 'http://localhost:3001/v1/category',
                 {headers:{
                     Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld3VzZXJAcy5jb20iLCJpYXQiOjE2NTk0NjgzMjUsImV4cCI6MTY1OTU1NDcyNX0.rp60_YsjdVtG0o6_YSY81OxjsFHU0BnA8rA9HZD5XV8'
                 }}
     
             )
             resolve(result)
         } catch (error) {
             reject(error)
         }
    })
   
}