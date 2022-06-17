import React from 'react'
import {  Button, Table } from "react-bootstrap";

const CategoryTable = ({categoryData}) => {
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Category</th>
        <th>No. of Products</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {categoryData.length ? 
      categoryData.map((row)=>(
         <tr key={row.id}>
         <td>{row.id}</td>
         <td>{row.category}</td>
         <td>{row.num}</td>
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