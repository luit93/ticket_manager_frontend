import React from 'react'
import {  Button, Table } from "react-bootstrap";

const CategoryTable = () => {
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
      <tr>
        <td>1</td>
        <td>Chairs</td>
        <td>4</td>
        <td>
          <Button>Edit</Button>
        </td>
        <td>
          <Button>Remove</Button>
        </td>
      </tr>
    </tbody>
  </Table>
  )
}

export default CategoryTable