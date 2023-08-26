/* eslint-disable react/no-unescaped-entities */
'use client'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import NavigationBar from "./components/navigationBar";
import BuildingDle from "./components/buildingDle";
import Map from "./components/map";
import { Row, Col } from "react-bootstrap";
import WinRatio from "./components/winRatio";
import Precinct from "./components/precinct";
import { useBetween } from "use-between";
import { useShareableState } from "./hooks/useShareableState";
import { correct_answer, buildings } from "./shared";

export default function Home() {
  const { gameover } = useBetween(useShareableState);

  return (
    <main>
      <NavigationBar />
      <Row>
        <Col xs={4} style={{margin: 0, padding: 0, border: 0, backgroundColor:"#6c757c"}}><Map /> <Precinct /></Col>
        <Col xs={6} style={{margin: 0, padding: 0, border: 0}}>
          <div className="text-center bg-secondary d-flex flex-column" style={{height: "calc(100vh - 55px)"}}>
            <div style={{color: "white"}}>
            {gameover ? <h4 style={{marginTop: "1em"}}>The correct answer was {correct_answer} - {buildings[correct_answer].name}</h4> : <>
              <h4>Welcome to UQ-Building-dle</h4>
              <p>A random UQ building has been chosen</p>
              <p>Guess what it is and we'll give you hints if you're wrong</p>
            </>}
            </div>

            <BuildingDle />
          </div>
        </Col>
        <Col>
          <WinRatio />
          <br/>
          <p>Leader board</p>
        </Col>
      </Row>
    </main>
  )
}
