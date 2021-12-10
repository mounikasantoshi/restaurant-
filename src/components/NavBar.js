import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            Resturent
          </Link>
          <Nav className="me-auto">
            {/* <Nav.Link> */}
            <Link class="nav-link " to="/">
              Home
            </Link>
            {/* </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
