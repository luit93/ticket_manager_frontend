import React from 'react'
import { Button, Table } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const OrderTable = ({orderData}) => {
  return (
    <Table striped bordered hover variant="dark">
         <thead>
      <tr>
        <th>#</th>
        <th>ID</th>
        <th>Date</th>
        <th>Customer Name</th>
        <th>Email</th>
        <th>CustomerId</th>
        <th>Total</th>
        <th>Status</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
        {orderData.length ?
        orderData.map((row,i)=>(
            <tr key={i}>
                <td>{i}</td>
                <td>{row.orderId}</td>
                <td>{row.orderDate}</td>
                <td>{row.customerName}</td>
                <td>{row.customerEmail}</td>
                <td>{row.customerId}</td>
                <td>{row.orderTotal}</td>
                <td>{row.orderStatus}</td>
               
                <td><Link to="/order/:id"><Button>View Order</Button></Link></td>
            </tr>
        ))
        : <tr><td colSpan="4" className='text-center'>No orders exist</td></tr>
    }
      </tbody>
    </Table>
  )
}


OrderTable.propTypes ={
    orderData: PropTypes.array.isRequired
}
export default OrderTable