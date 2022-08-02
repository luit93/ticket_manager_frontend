import React from 'react'
import {  Button, Table } from "react-bootstrap";
import { useSelector } from 'react-redux';
const CategoryTable = () => {
  const {searchList, isLoading, error}= useSelector(state => state.categories)
  if(isLoading) return <h3>Loading ...</h3>
  if(error) return <h3>{error}</h3>
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Category</th>
        {/* <th>Stock</th> */}
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {searchList.length ? 
      searchList.map((row)=>(
         <tr key={row._id}>
         <td>{row._id}</td>
         <td>{row.name}</td>
         {/* <td>{row.num}</td> */}
         <td>
           <Button>Edit</Button> 
         </td>
         <td>
           <Button>Remove</Button>
         </td>
       </tr>
        ))
      : <tr><td colSpan="4" className='text-center'>No categories exist</td></tr>}
     
    </tbody>
  </Table>
  )
}


export default CategoryTable