import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CategoryTable from "../../components/tables/CategoryTable";
import categoryData from "../../assets/data/category-data.json";
import PageBreadcrumb from "../../components/breadcrumb/PageBreadcrumb";
import SearchForm from "../../components/forms/SearchForm";
import { useState, useEffect } from "react";

const Category = () => {
  const [str, setStr] = useState(" ");
  const [searchedCategory, setSearchedCategory] = useState(categoryData);

  useEffect(() => {}, [str, searchedCategory]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchCategory(value);
  };

  const searchCategory = (str) => {
    const displayCategories = categoryData.filter((row) =>
      row.category.toLowerCase().includes(str.toLowerCase())
    );
    setSearchedCategory(displayCategories);
  };
  console.log(searchedCategory);
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
          <Button>Add New Category</Button>
        </Col>
        <Col>
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <CategoryTable categoryData={searchedCategory} />
      </Row>
    </Container>
  );
};

export default Category;
