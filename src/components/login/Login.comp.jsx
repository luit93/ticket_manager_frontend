import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import { Container, Form, Col, Row, Button,Spinner,Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import {loginPending,loginSuccess,loginFail} from './loginSlice'
import { useDispatch,useSelector } from "react-redux";
import { userLogin } from "../../api/userApi";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../pages/dashboard/userAction";
const Login = ({switchForm }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isLoading,isAuth,error} = useSelector(state=> state.login)
  useEffect(()=>{(sessionStorage.getItem('accessJWT')) && navigate('/dashboard')},[isAuth,navigate])
  const [email, setEmail] = useState("newuser@s.com");
  const [password, setPassword] = useState("999999999");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("fill all the blanks");
    }
    dispatch(loginPending())
    try {
      const  result = await userLogin({email,password})
      if(result.status === 'error'){
       return dispatch(loginFail(result.message))
      }
      dispatch(loginSuccess())
      dispatch(getUserProfile())
      navigate('/dashboard')
    } catch (error) {
      dispatch(loginFail(error.message))

    }
  };
  return (
      
  

    <div>
      <Container>
        <Row>
          <Col>
            <h2>Log In</h2>
            <hr />
            {error && <Alert variant="danger">{error}</Alert>}
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
                  Not yet registered? <Link to="/register">Sign Up</Link>
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
                <Form.Text className="text-muted">
                  <a href="#!" onClick={() => switchForm("reset")}>
                    Forgot Password?
                  </a>
                </Form.Text>
              </Form.Group>
              <Button className="m-2" type="submit">
                Log In
              </Button>
              {isLoading && <Spinner variant="primary" animation="border"/> }
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
Login.propTypes = {
  switchForm: PropTypes.func.isRequired,
};
export default Login;
