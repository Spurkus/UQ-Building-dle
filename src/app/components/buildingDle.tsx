'use client'
import { FormEvent, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import ignore_buildings from "../buildings.json";
import Guess from './guess';

// Maybe we should move this somewhere else idk
export interface Building {
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
  .filter(({value}) => buildings[value].latitude !== null)

// TODO: Don't do it like this. We want it to be the same for everyone each day
const correct_answer = randElement(select_options.map(v => v.value))
console.log("correct answer:", correct_answer);


function BuildingDle() {
  const [guesses, setGuesses] = useState<React.JSX.Element[]>([])
  const [gameover, setGameover] = useState(false)
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
    
   setGuesses([...guesses, <Guess buildings={buildings} num={value} correct_num={correct_answer}/>])

   if (value === correct_answer) {
    alert("epic you win")
    setGameover(true);
    return
   }

  //  I think it's 5 because it's using the old value of guesses
   if (guesses.length === 5) {
    setGameover(true);
   }
  }

  return (
    <Container className="justify-content-center">
      {!gameover && <Form className="d-flex" onSubmit={handleSubmit}>
          <Select
            placeholder="Enter a building"
            className="me-2 flex-fill"
            aria-label="Search"
            options={select_options}
            ref={select_element}
          />
          <Button variant="success" type="submit">Guess!</Button>
      </Form>}
        
      {guesses}
    </Container>
  );
}

export default BuildingDle;