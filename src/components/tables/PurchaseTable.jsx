import React from 'react'
import { Button, Table } from 'react-bootstrap'
import PropTypes from 'prop-types'
import productData from "../../assets/data/product-data.json"
import purchaseData from "../../assets/data/purchase-data.json"
const PurchaseTable = ({orderData}) => {
  return (
    <Table striped bordered hover variant="dark">
         <thead>
      <tr>
        <th>#</th>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price per Item</th>
        <th>Total</th>
       
        <th></th>
      </tr>
      </thead>
      <tbody>
       
      </tbody>
    </Table>
  )
}


PurchaseTable.propTypes ={
    orderData: PropTypes.array.isRequired,
    productData: PropTypes.array.isRequired,
}
export default PurchaseTable