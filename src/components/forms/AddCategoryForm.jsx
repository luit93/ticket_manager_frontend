import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import PropTypes  from "prop-types";

const AddCategoryForm = ({ handleOnSubmit, handleOnChange,formData }) => {
  console.log(formData)
    return (
    <Container class="bg-dark text-light p-5">
       
      <div class=" bg-dark p-5">
      <h1 className="text-light text-center pb-2">Add New Category</h1>
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={3} className="text-light ">
              Category Name
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                required
                value={formData.category}
                placeholder="Enter Category"
                type="text"
                name="category"
                minLength={1}
                maxLength={50}
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mt-4">
            <Form.Label column sm={3} className="text-light  mt-4">
              Description
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                required
                placeholder="Enter Description"
                rows={3}
                value={formData.description}
                as="textarea"
                type="text"
                name="description"
                minLength={1}
                maxLength={1000}
                onChange={handleOnChange}
              />
            </Col>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group as={Row} controlId="formFileLg" className="mt-4 mb-3">
            <Form.Label column sm={3} className="text-light mt-2 ">
              Add Image
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="file" size="lg" value={formData.image}  />
            </Col>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
         
          <Button variant="primary" type="submit" size="lg">
            Add Category
          </Button>
        </Form>
      </div>
    </Container>
  );
};

AddCategoryForm.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired
}
export default AddCategoryForm;
