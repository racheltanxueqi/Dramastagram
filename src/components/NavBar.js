import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">Dramastagram</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Drama List</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};
  
export default NavBar;