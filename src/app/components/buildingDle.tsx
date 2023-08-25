'use client'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ignore_buildings from "../buildings.json";

// Maybe we should move this somewhere else idk
interface Building {
  name: string;
  street: string;
  latitude: number;
  longitude: number;
}

function randElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Make Typescript happy
const buildings: Record<string, Building> = ignore_buildings;

const select_options = Object.keys(buildings).map((num) => {return {value: num, label: `${num} - ${buildings[num].name}`}})

// TODO: Don't do it like this. We want it to be the same for everyone each day
const correct_answer = randElement(Object.keys(buildings))
console.log(correct_answer);

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
              options={select_options}
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