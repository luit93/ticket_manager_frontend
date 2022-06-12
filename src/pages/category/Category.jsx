import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import CategoryTable from "../../components/tables/CategoryTable";
const Category = () => {
  return (
    <Container className="d-flex-col ">
      <Row className=" major-button" >
        <Button >Add New Category</Button>
      </Row>
      <Row>
      <CategoryTable/>
      </Row>
    </Container>
  );
};

export default Category;
