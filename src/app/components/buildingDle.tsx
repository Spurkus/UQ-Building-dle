'use client'
import { FormEvent, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ignore_buildings from "../buildings.json";
import { log } from 'console';

// Maybe we should move this somewhere else idk
interface Building {
  name: string;
  precinct: string;
  latitude: number | null;
  longitude: number | null;
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



function coordDistance(b1: string, b2:string): number {
  const {latitude: la1, longitude: ll1} = buildings[b1]
  const {latitude: la2, longitude: ll2} = buildings[b2]
  // @ts-ignore
  return Math.acos(Math.sin(la1)*Math.sin(la2) + Math.cos(la1)*Math.cos(la2)*Math.cos(ll2-ll1)) * 6.371 
}


function BuildingDle() {
  // Please change search form to dropdown thing please ty thanks :)
  const [buildingName, setBuildingName] = useState();
  const select_element = useRef(null)

  // TODO: Proper typing
  // @ts-ignore
  const getSelectValue: () => string | undefined = () => select_element.current?.state.selectValue[0]?.value;

  function handleSubmit(event: FormEvent) {
    event.preventDefault() // make the website not reload
    const value =  getSelectValue()
    
   if (value === undefined) {
    alert("you need to select a building")
    return
   }

   console.log(value);
    
  }

  return (
    <Container className="justify-content-center">
        <Form className="d-flex" onSubmit={handleSubmit}>
            <Select
              placeholder="Search"
              className="me-2 flex-fill"
              aria-label="Search"
              options={select_options}
              ref={select_element}
            />
            <Button variant="success" type="submit">Guess!</Button>
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