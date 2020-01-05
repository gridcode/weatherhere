import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <Navbar sticky="top" expand="sm">
    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
      <Nav>
        <Nav.Item>
          <NavLink
            activeClassName="active"
            className="nav-link mr-4 "
            exact
            to="/"
          >
            <i className="fas fa-sm fa-arrow-left mx-2"></i>
            Home
          </NavLink>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
