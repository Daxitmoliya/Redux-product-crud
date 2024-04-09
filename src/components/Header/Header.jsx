
import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="brand">Redux</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link ms-2">
              About
            </NavLink>
            <NavLink to="/services" className="nav-link ms-2">
              Services
            </NavLink>
            <NavLink to="/blog" className="nav-link ms-2">
              Blog
            </NavLink>
            <NavLink to="/pages" className="nav-link ms-2">
              Pages
            </NavLink>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="primary" className="me-2">
              Sign In
            </Button>
            <NavLink to="/view" className="nav-link">
              View
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
