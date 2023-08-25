'use client'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BuildingDle() {
  // Please change search form to dropdown thing please ty thanks :)
  return (
    <Container className="justify-content-center">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Guess!</Button>
        </Form>
    </Container>
  );
}

export default BuildingDle;