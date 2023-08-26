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
import { useLocalStorage } from '../hooks/useLocalStorage';

function NavigationBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [difficultyValue, setDifficultyValue] = useLocalStorage('difficulty', 1);

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
                checked={difficultyValue === difficulty.value}
                onChange={(e) => setDifficultyValue(parseInt(e.currentTarget.value))}
              >
                {difficulty.name}
              </ToggleButton>
            ))}
        </ButtonGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => location.reload()}>
            Play Again
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default NavigationBar;