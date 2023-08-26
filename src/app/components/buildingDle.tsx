'use client'
import { FormEvent, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import Guess from './guess';
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useShareableState } from '../hooks/useShareableState';
import { useBetween } from 'use-between';
import { Modal } from 'react-bootstrap';
import { correct_answer, buildings } from "../shared";

const select_options = Object.keys(buildings).map((num) => {return {value: num, label: `${num} - ${buildings[num].name}`}})

function BuildingDle() {
  const { gameover, setGameover } = useBetween(useShareableState);
  console.log("correct answer:", correct_answer);


  const [guesses, setGuesses] = useState<React.JSX.Element[]>([])
  const [won, setWon] = useState(false)
  const select_element = useRef(null)
  const [wins, setWins] = useLocalStorage('wins', 0)
  const [plays, setPlays] = useLocalStorage('plays', 0)

  // TODO: Proper typing
  // @ts-ignore
  const getSelectValue: () => string | undefined = () => select_element.current?.state.selectValue[0]?.value;

  function onGameover() {
    setPlays(plays + 1)
    setGameover(true);
  }
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault() // make the website not reload
    const value =  getSelectValue()
    
   if (value === undefined) {
    alert("you need to select a building")
    return
   }

   console.log(value);
    
   setGuesses([...guesses, <Guess buildings={buildings} num={value} correct_num={correct_answer} key={guesses.length}/>])

   if (value === correct_answer) {
    setWon(true)
    setWins(wins + 1)
    onGameover()
    return
   }

  //  I think it's 5 because it's using the old value of guesses
   if (guesses.length === 5) {
    onGameover()
   }
  }

  return (<>
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

      <Modal show={gameover}>
        <Modal.Header>
          {won ? <Modal.Title>You Won!</Modal.Title> : <>
            <Modal.Title>You lost</Modal.Title>
            The building was {correct_answer} - {buildings[correct_answer].name}
          </>}
          
        </Modal.Header>
        <Modal.Body>
        <Button onClick={() => location.reload()}>Play Again</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BuildingDle;