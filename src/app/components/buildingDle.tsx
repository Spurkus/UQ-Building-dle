'use client'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ] // Temporary Data

function BuildingDle() {
  // Please change search form to dropdown thing please ty thanks :)
  const [buildingName, setBuildingName] = useState();
  return (
    <Container className="justify-content-center">
        <Form className="d-flex">
            <Select
              placeholder="Search"
              className="me-2 flex-fill"
              aria-label="Search"
              options={options}
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