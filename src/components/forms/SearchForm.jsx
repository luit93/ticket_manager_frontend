import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";
const SearchForm = ({ handleOnChange, str }) => {
  // console.log(str)
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Col sm={9}>
            <Form.Control
              name="search"
              value={str}
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
SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
export default SearchForm;
