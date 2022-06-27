import React from "react";
import PropTypes from "prop-types";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
const RegisterForm = ({ handleOnChange, handleOnSubmit, email, password, name,dob }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Register</h2>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  onChange={handleOnChange}
                  placeholder="Enter Email"
                  type="email"
                  name="email"
                  value={email}
                />
                <Form.Text className="text-muted">
                  Already registered? <a href="#!">Sign In</a>
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Password"
                  onChange={handleOnChange}
                  type="password"
                  name="password"
                  value={password}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter Name"
                  onChange={handleOnChange}
                  type="name"
                  name="name"
                  value={name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter DOB"
                  onChange={handleOnChange}
                  type="date"
                  name="dob"
                  value={dob}
                />
              </Form.Group>
              <Button className="m-2" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
RegisterForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
};
export default RegisterForm;
