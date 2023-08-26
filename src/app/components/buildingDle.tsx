/* eslint-disable react/no-unescaped-entities */
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
import Map from './map';
import Confetti from 'react-confetti';
import { Fireworks } from "@fireworks-js/react";

const select_options = Object.keys(buildings).map((num) => {return {value: num, label: `${num} - ${buildings[num].name}`}})

function BuildingDle() {
  const { gameover, setGameover, guessAmount, setGuessAmount } = useBetween(useShareableState);
  const [ showModal, setShowModal ] = useState(false)
  const [ showSelectModal, setShowSelectModal ] = useState(false)
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
    setShowModal(true)
  }
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault() // make the website not reload
    const value =  getSelectValue()
    
   if (value === undefined) {
    setShowSelectModal(true)
    return
   }

   console.log(value);
    
   setGuesses([...guesses, <Guess buildings={buildings} num={value} correct_num={correct_answer} key={guesses.length}/>])
   setGuessAmount(guesses.length + 1)

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

      <Modal show={showModal}>
        <Modal.Header>
          {<Modal.Title>{won ? "You Won!" : "You Lost"}</Modal.Title>}
          
        </Modal.Header>
        <Modal.Body>
        <Button onClick={() => setShowModal(false)}>Close</Button>

        <Map/>
        </Modal.Body>
      </Modal>

      <Modal show={showSelectModal}>
        <Modal.Header>
          <Modal.Title>You didn't select anything you silly baka!! {'>.<'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please select a building</p>
        <Button onClick={() => setShowSelectModal(false)}>Close</Button>
        <Map/>
        </Modal.Body>
      </Modal>

      {won && <Confetti/>}
      {won && <Fireworks/>}
    </>
  );
}

export default BuildingDle;