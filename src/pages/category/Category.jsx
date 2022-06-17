import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CategoryTable from "../../components/tables/CategoryTable";
import categoryData from "../../assets/data/category-data.json"
import PageBreadcrumb from "../../components/breadcrumb/PageBreadcrumb";

const Category = () => {
  return (
    <Container className="d-flex-col ">
      <Row>
        <Col>
        <PageBreadcrumb page="Category"/></Col>
      </Row>
      <Row className=" major-button" >
        <Button >Add New Category</Button>
      </Row>
      <Row>
      <CategoryTable categoryData={categoryData} />
      </Row>
    </Container>
  );
};

export default Category;
