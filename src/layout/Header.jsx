import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar collapseOnSelect variant="dark" bg="dark" expand="md">
      <Navbar.Brand href="#home">Product Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto ">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/logout">Logout</Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
