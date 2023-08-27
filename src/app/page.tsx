/* eslint-disable react/no-unescaped-entities */
'use client'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import NavigationBar from "./components/navigationBar";
import BuildingDle from "./components/buildingDle";
import Map from "./components/map";
import { Row, Col } from "react-bootstrap";
import WinRatio from "./components/winRatio";
import Streaks from "./components/streaks";
import Precinct from "./components/precinct";
import { useBetween } from "use-between";
import { useShareableState } from "./hooks/useShareableState";
import { correct_answer, buildings, chosen_difficulty } from "./shared";

function boxStyle(width: string, height: string, paddingLeft: string, paddingRight: string, paddingTop: string, paddingBottom: string) {
  const style = {
    display: 'inline-block',
    width: width,
    height: height,
    backgroundColor: '#F8F8F8',
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    borderRadius: '1rem',
    boxShadow: '1px 2px 9px #36454F',
    color: '#3B3B3B'
  };
return style
}

export default function Home() {
  const { gameover, guessAmount } = useBetween(useShareableState);

  const x = <div style={{height: "100%", display: "flex", placeItems: "center", justifyContent: "center"}}>
    <div style={{fontSize: 100}}>❌</div>
  </div>

  return (
    <main style={{overflow: 'hidden', backgroundImage: 'linear-gradient(140deg, #B034E9 0%, #06496E 100%)'}}>
      <NavigationBar />
      <Row>
         <Col xs={5} md={6} style={{margin: 0, marginTop: '25px', marginLeft: '45px', marginRight: '10px', padding: 0, border: 0}}>
          <div className="d-flex flex-column" style={{height: "calc(100vh - 55px)"}}>
            <div style={boxStyle('95%', '88%', '2rem', '2rem', '1rem', '1rem')}>
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
        <Col xs={5} style={{marginTop: '25px', padding: 0, border: 0}}>
          <div style={boxStyle('100%', '47%', '1rem', '1rem', '1rem', '1rem')}>
            {chosen_difficulty === 4 ? x :<Map /> }
          </div>
          <br></br>
          <br></br>
          <Row>
            <Col xs={7}>
            <div style={boxStyle('100%', '220px', '1rem', '1rem', '1rem', '1rem')}>
              {chosen_difficulty === 4 ? x : <Precinct /> }
              
            </div>
            </Col>
            <Col xs={5}>
            <div style={boxStyle('100%', '45%', '1rem', '1rem', '1.5rem', '1rem')}>
              <WinRatio />
            </div>
            <br></br>
            <br></br>
             <div style={boxStyle('100%', '44%', '1rem', '1rem', '1.5rem', '1rem')}>
              <Streaks />
            </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </main>
  )
}
