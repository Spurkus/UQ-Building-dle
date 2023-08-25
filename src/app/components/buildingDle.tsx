'use client'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

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
        <ListGroup key="md" horizontal="md" className="my-2">
          <ListGroup.Item>Advanced Engineering Building</ListGroup.Item>
          <ListGroup.Item>{'>'} 49</ListGroup.Item>
          <ListGroup.Item>Staff House Road Precinct</ListGroup.Item>
          <ListGroup.Item>100m</ListGroup.Item>
        </ListGroup>
    </Container>
  );
}

export default BuildingDle;