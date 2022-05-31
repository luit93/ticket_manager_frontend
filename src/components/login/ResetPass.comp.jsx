import React from "react";
import PropTypes from 'prop-types'
import { Container, Form, Col, Row, Button } from "react-bootstrap";
const ResetPass = ({handleOnChange,handleOnSubmit,switchForm,email}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Reset Password</h2>
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
                Back to <a href="#!" onClick={()=>switchForm('login')}>Log in</a>
                </Form.Text>
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
ResetPass.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    switchForm: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    
}
export default ResetPass;
