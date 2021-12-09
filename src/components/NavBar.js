import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Resturent</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/tables">Tables</Nav.Link>
            <Nav.Link href="/tables">Tables</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
