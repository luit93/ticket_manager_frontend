import React from "react";
import { Nav, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar collapseOnSelect variant="dark" bg="dark" expand="md">
      <Navbar.Brand href="#home">Product Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/categories">Categories</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
