import React from "react";
import PropTypes from 'prop-types'
import { Container, Form, Col, Row, Button } from "react-bootstrap";
const Login = ({handleOnChange,handleOnSubmit,email,pass,switchForm}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Log In</h2>
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
                Not yet registered? <a href="#!"  >Sign Up</a>
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
                  value={pass}
                />
                <Form.Text className="text-muted"><a href="#!" onClick={()=>switchForm('reset')}>Forgot Password?</a></Form.Text>
              </Form.Group>
              <Button className="m-2" type="submit">
                Log In
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
Login.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    switchForm: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
}
export default Login;
