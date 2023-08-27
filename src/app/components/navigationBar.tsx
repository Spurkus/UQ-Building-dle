'use client'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import { useBetween } from 'use-between';
import { useShareableState } from '../hooks/useShareableState';

function NavigationBar() {
  const { difficulty, setDifficulty } = useBetween(useShareableState);
  const [show, setShow] = useState(false);
  const [ showInstructionsModal, setShowInstructionsModal ] = useState(false)

  const [localDifficulty, setLocalDifficulty] = useState(difficulty)
  
  const handleClose = () => {
    setLocalDifficulty(difficulty)
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const difficulties = [
    { name: 'Easy', value: 1 },
    { name: 'Medium', value: 2 },
    { name: 'Hard', value: 3 },
    { name: 'Impossible', value: 4}
  ];

  function variant(id: number) {
    if (id === 1) {
      return "outline-success"
    } else if (id === 2) {
      return "outline-info"
    } else if (id === 3) {
      return "outline-warning"
    } else {
      return "outline-danger"
    }
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary" expand="lg">
      <Container className="justify-content-center">
        <Navbar.Brand>
          <Image
              src="/logo/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="UQ-Building-dle logo"
            />{'  '}
          UQ-Building-dle
          </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/Spurkus/UQ-Building-dle">Github Repo</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link><Button variant="primary" onClick={() => location.reload()}>Play Again</Button></Nav.Link>
            <Nav.Link><Button variant="outline-info" onClick={handleShow}>Settings ⚙️</Button></Nav.Link>
            <Nav.Link><Button variant="outline-info" onClick={() => setShowInstructionsModal(true)}>?</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Click on buttons to change difficulty.</p>
          <ButtonGroup>
            {difficulties.map((difficulty, idx) => (
              <ToggleButton
                key={idx}
                id={`difficulty-${idx}`}
                type="radio"
                variant={variant(idx + 1)}
                name="difficulty"
                value={difficulty.value}
                checked={localDifficulty === difficulty.value}
                onChange={(e) => setLocalDifficulty(parseInt(e.currentTarget.value))}
              >
                {difficulty.name}
              </ToggleButton>
            ))}
        </ButtonGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => {
            setDifficulty(localDifficulty);
            location.reload();
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showInstructionsModal}>
        <Modal.Header>
          <Modal.Title style={{textAlign: "center", width: "100%"}}>Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Welcome to UQ-Building-dle! Here{"'"}s how to play:</p>
          <p>Goal: Find the mystery building utilising two maps: a map of UQ and a precinct map. Please note that this precinct map only displays the precinct you{"'"}ve chosen, which might not necessarily be the correct one.</p>
          <p>Step One: Begin by choosing a building using the search bar or drop-down menu.</p>
          <p>Step Two: Watch the building numbers. They{"'"}ll turn greener as you get closer to the right building number.</p>
          <p>Step Three: If you find the right precinct, it will turn green.</p>
          <p>Step Four: Check the distance indicator. It shows how far your choice is from the real mystery building.</p>
        <Button onClick={() => setShowInstructionsModal(false)}>Close</Button>
        </Modal.Body>
      </Modal>

    </Navbar>
  );
}

export default NavigationBar;