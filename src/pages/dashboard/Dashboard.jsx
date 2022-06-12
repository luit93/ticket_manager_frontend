import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,Button
} from "react-bootstrap";
const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex-col justify-content-center align-items-center  mb-4 p-3">
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>Categories</Card.Title>
              <Card.Text>Manage your categories</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="text-center">
                total categories:
              </ListGroupItem>
              <ListGroupItem className="text-center">9</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col className="d-flex-col justify-content-center align-items-center  mb-4 p-3">
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>Profile</Card.Title>
              
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="text-center">
                Email: <Button>Edit</Button>
              </ListGroupItem>
              
              <ListGroupItem className="text-center">Role <Button>Edit</Button></ListGroupItem>
              <ListGroupItem className="text-center">Name <Button>Edit</Button></ListGroupItem>
              <ListGroupItem className="text-center"><Button>Change Password</Button> </ListGroupItem>
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
              <ListGroupItem className="text-center">
                total products:
              </ListGroupItem>
              <ListGroupItem className="text-center">99</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
