/* eslint-disable react/no-unescaped-entities */
'use client'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import NavigationBar from "./components/navigationBar";
import BuildingDle from "./components/buildingDle";
import Map from "./components/map";
import { Row, Col, ProgressBar } from "react-bootstrap";
import {useLocalStorage} from "usehooks-ts"

export default function Home() {
  const [plays] = useLocalStorage('plays', 0)
  const [wins] = useLocalStorage('wins', 0)
  const win_ratio = wins/plays * 100
  const lose_ratio = 100 - win_ratio

  return (
    <main>
      <NavigationBar />
      <Row>
        <Col xs={4} style={{margin: 0, padding: 0, border: 0}}><Map /></Col>
        <Col xs={6} style={{margin: 0, padding: 0, border: 0}}>
          <div className="text-center bg-secondary d-flex flex-column" style={{height: '100%'}}>
            <div style={{color: "white"}}>
            <h4>Welcome to UQ-Building-dle</h4>
            <p>A random UQ building has been chosen</p>
            <p>Guess what it is and we'll give you hints if you're wrong</p>
            </div>

            <BuildingDle />
          </div>
        </Col>
        <Col><p>Win/Lose Ratio: 
          <ProgressBar>
            <ProgressBar style={{backgroundColor: "green", width:`${win_ratio}%`}}/>
            <ProgressBar style={{backgroundColor: "red", width: `${lose_ratio}%`}}/>
          </ProgressBar>
          <br/>
        Leader board</p></Col>
      </Row>
    </main>
  )
}
