'use client'
import { ListGroup } from "react-bootstrap";
import { Building } from "../shared";

const toRadians = (angle: number ) => angle * (Math.PI / 180);
const sin = (n: number) => Math.sin(toRadians(n))
const cos = (n: number) => Math.cos(toRadians(n))

function coordDistance(la1: number, ll1: number, la2: number, ll2: number): number {
    return Math.round(Math.acos(sin(la1)*sin(la2) +cos(la1)*cos(la2)*cos(ll2-ll1)) * 6371000)  
}
  

interface GuessProps {
    buildings: Record<string, Building>
    num: string
    correct_num: string
}

const Guess: React.FC<GuessProps> = ({buildings, num, correct_num}) => {
    const {name, precinct: pGuess, latitude: la1, longitude: ll1 } = buildings[num]; 
    const {precinct: pAnswer, latitude: la2, longitude: ll2 } = buildings[correct_num]; 
    return <ListGroup key="md" horizontal="md" className= "my-2 flex-fill d-flex">
        <ListGroup.Item className="flex-fill">{name}</ListGroup.Item>
        <ListGroup.Item className="flex-fill">{parseInt(correct_num) > parseInt(num) ? '>' : '<'}{num}</ListGroup.Item>
        <ListGroup.Item className="flex-fill" style={pAnswer === pGuess? {backgroundColor: "#6fe388"} : {backgroundColor: "#e65e5e"}}>{pGuess}</ListGroup.Item>
        {/* TODO: remove the ! */}
        <ListGroup.Item className="flex-fill">{coordDistance(la1!, ll1!, la2!, ll2!)}m</ListGroup.Item>
    </ListGroup>
}

export default Guess;
