import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'
import { userLogout } from "../api/userApi";

const Header = () => {
  const history = useNavigate()

  const logOut =()=>{
    sessionStorage.removeItem('accessJWT')
    localStorage.removeItem('stockManager')
    userLogout()
    history("/")
  }
  return (
    <Navbar collapseOnSelect variant="dark" bg="dark" expand="md">
      <Navbar.Brand href="#home">Product Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto ">
          <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
          <LinkContainer to="/categories"><Nav.Link>Categories</Nav.Link></LinkContainer>
          <LinkContainer to="/orders"><Nav.Link>Orders</Nav.Link></LinkContainer>
          {/* <LinkContainer to="/logout"><Nav.Link>Logout</Nav.Link></LinkContainer> */}
          <Nav.Link onClick={logOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
