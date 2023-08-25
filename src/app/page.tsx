'use client'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import NavigationBar from './components/navigationBar';
import BuildingDle from "./components/buildingDle";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <Container>
      <Row>
        <Col>Map implement Maybe</Col>
        <Col xs={6}>
          <div className="text-center bg-secondary vh-100 d-flex flex-column">
            <h4>Main Section</h4>
            <BuildingDle />
          </div>
        </Col>
        <Col><p>Win/Lose Rate <br></br> Leader board</p></Col>
      </Row>
    </Container>
    </main>
  )
}
