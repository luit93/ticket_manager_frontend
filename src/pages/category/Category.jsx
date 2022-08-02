import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CategoryTable from "../../components/tables/CategoryTable";
import PageBreadcrumb from "../../components/breadcrumb/PageBreadcrumb";
import SearchForm from "../../components/forms/SearchForm";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllCategories } from "./categoryListAction";
const Category = () => {
  const dispatch = useDispatch()


  useEffect(() => {dispatch(fetchAllCategories())}, [dispatch]);



  return (
    <Container className="d-flex-col ">
      <Row>
        <Col>
          <PageBreadcrumb page="Categories" />
        </Col>
      </Row>
      <Row className="button-search-row">
        <Col>
          {" "}
          <Link to="/addcat"><Button>Add New Category</Button></Link>
        </Col>
        <Col>
          <SearchForm  />
        </Col>
      </Row>
      <hr />
      <Row>
        <CategoryTable  />
        
      </Row>
    </Container>
  );
};

export default Category;
