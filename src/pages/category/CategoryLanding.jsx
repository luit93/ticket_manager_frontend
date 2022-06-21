import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import PageBreadcrumb from "../../components/breadcrumb/PageBreadcrumb";
import SearchForm from "../../components/forms/SearchForm";
import allProductData from "../../assets/data/product-data.json";
import ProductTable from "../../components/tables/ProductTable";
import { useState, useEffect } from "react";

const CategoryLanding = ({category,desc}) => {
  const [str, setStr] = useState(" ");

  const productData = allProductData.filter((row) =>
  row.category.toLowerCase().includes(category))

  const [searchedProduct, setSearchedProduct] = useState(productData);
 

  useEffect(() => {}, [str, searchedProduct]);

 const searchProduct = (str) => {
    const displayProducts = productData.filter((row) =>
      row.product.toLowerCase().includes(str.toLowerCase())
    );
    setSearchedProduct(displayProducts);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchProduct(value);
  };

 

  console.log('spd',searchedProduct)


  return (
    <Container className="d-flex-col ">
      <Row>
        <Col>
          <PageBreadcrumb page="category name" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>{category}</Card.Title>
              <Card.Text>
              {desc}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="button-search-row">
        <Col>
          <Button>Add New Product</Button>
        </Col>
        <Col>
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
     
          <ProductTable productData={searchedProduct}  />
       
      </Row>
    </Container>
  );
};

export default CategoryLanding;
