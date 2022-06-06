import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
const Dashboard = () => {
  return (
    <Container>
        <Row><h1>Categories</h1></Row>
        <Row>
            <Col>#</Col>
            <Col>Name</Col>
            <Col><Button className='' variant='dark' >Edit Category</Button></Col>
            <Col><Button className='' variant='dark'>Remove Category</Button></Col>
        </Row>
    </Container>
  )
}

export default Dashboard