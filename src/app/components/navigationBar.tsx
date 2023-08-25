'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavigationBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary" expand="lg">
      <Container className="justify-content-center">
        <Navbar.Brand>UQ-Building-dle</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/Spurkus/UQ-Building-dle">Github Repo</Nav.Link>
          </Nav>
          <Button variant="outline-info">Login (NOT YET IMPLEMENTED)</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;