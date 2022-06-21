import React from 'react'
import { Card, Col, Container, ListGroup, Row,Button, Carousel } from 'react-bootstrap'
import PageBreadcrumb from "../../components/breadcrumb/PageBreadcrumb";
// import { useState, useEffect } from "react";
import allProductData from "../../assets/data/product-data.json";

const ProductLanding = ({productName}) => {
    const productData = allProductData.filter((row) =>
    row.product.toLowerCase().includes(productName))

    console.log(productData)

    // console.log("data:",productData.product,productData.category,productData.stock)
  return (
    <Container>
        <Row>
        <PageBreadcrumb page={productName} />
        </Row>
        <Row>
            <Col>
            {productData.length?
            productData.map((row)=>(
<Card style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>{row.product}</Card.Title>
      <Card.Text>
       {row.desc}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Category: {row.category}</ListGroup.Item>
      <ListGroup.Item>Stock: {row.stock}</ListGroup.Item>
  
    </ListGroup>

    <Card.Body >
      <Button className='pr-2'>Edit</Button>
      {" "}
      <Button className='pl-2'>Delete</Button>
    </Card.Body>
  </Card>
            ))
        : <h3> Empty</h3>
        }
            
  </Col>
      
        </Row>
        <Row>
            <Col>
            <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="First img"
        />
        <Carousel.Caption>
          <h3>First product slide</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
            </Col>
        </Row>
    </Container>

  )
}

export default ProductLanding