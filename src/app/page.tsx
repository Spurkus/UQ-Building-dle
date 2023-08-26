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
  const { gameover, guessAmount } = useBetween(useShareableState);

  const boxStyle = {
    margin: 'auto',
    display: 'inline-block',
    width: '100%',
    height: '88%',
    backgroundColor: '#F8F8F8',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '2rem',
    paddingBottom: '1rem',
    borderRadius: '1rem',
    boxShadow: '1px 2px 9px #9E9E9E',
    color: '#3B3B3B'
  };

  return (
    <main style={{overflow: 'hidden'}}>
      <NavigationBar />
      <Row>
         <Col xs={5} md={6} style={{margin: 0, marginLeft: '45px', marginRight: '10px', padding: 0, border: 0}}>
          <div className="bg-secondary d-flex flex-column" style={{height: "calc(100vh - 55px)"}}>
            <div style={boxStyle}>
            {gameover ? <h4 style={{marginTop: "0.5em"}}>The correct answer was {correct_answer} - {buildings[correct_answer].name}</h4> : <>
              <h3 style={{textAlign: "center", fontWeight: "700"}}>Welcome to UQ-Building-dle</h3>
              <Row>
                <Col xs={10}>
                  <p style={{fontWeight: "600"}}>A random UQ building has been chosen <br></br> Start by guessing!!</p>
                  </Col>
                <Col><h4>{guessAmount} / 6</h4></Col>
              </Row>
            </>}
            <BuildingDle />
            </div>
          </div>
        </Col>
        <Col xs={3} style={{margin: 0, padding: 0, border: 0, backgroundColor:"#6c757c"}}>
          <Map />
          <Precinct />
          <WinRatio />
        </Col>
      </Row>
    </main>
  )
}
