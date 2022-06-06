import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
const Dashboard = () => {
  return (
    <Container className="d-flex-col justify-content-center align-items-center  mb-4 p-3">
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>Categories</Card.Title>
              <Card.Text>Manage your categories</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>total categories:</ListGroupItem>
              <ListGroupItem>9</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>Products</Card.Title>
              <Card.Text>Manage your products</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>total products:</ListGroupItem>
              <ListGroupItem>99</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
   
    </Container>
  );
};

export default Dashboard;
