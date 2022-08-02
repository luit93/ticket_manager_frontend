import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {filterSearchCategories} from '../../pages/category/categoryListAction'
const SearchForm = () => {
  // console.log(str)
  const dispatch = useDispatch()
  const handleOnChange =e=>{
    const {value} = e.target
    dispatch(filterSearchCategories(value))
  }
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Col sm={9}>
            <Form.Control
              name="search"
              onChange={handleOnChange}
              placeholder="Search... "
              as="input"
              type="text"
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchForm;
