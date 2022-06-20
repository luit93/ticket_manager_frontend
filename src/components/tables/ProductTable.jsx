import React from 'react'
import {  Button, Table } from "react-bootstrap";
import PropTypes from 'prop-types'
const ProductTable = ({productData}) => {
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Product</th>
        <th>Stock</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {productData.length ? 
      productData.map((row)=>(
         <tr key={row.id}>
         <td>{row.id}</td>
         <td>{row.product}</td>
         <td>{row.stock}</td>
         <td>
           <Button>Edit</Button> 
         </td>
         <td>
           <Button>Remove</Button>
         </td>
       </tr>
        ))
      : <tr><td colSpan="4" className='text-center'>No products exist</td></tr>}
     
    </tbody>
  </Table>
  )
}

ProductTable.propTypes ={
  productData: PropTypes.array.isRequired
}
export default ProductTable