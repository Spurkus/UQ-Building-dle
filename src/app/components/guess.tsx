'use client'
import { ListGroup } from "react-bootstrap";
import { Building } from "./buildingDle";

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
    const {name, precinct, latitude: la1, longitude: ll1 } = buildings[num]; 
    const {latitude: la2, longitude: ll2 } = buildings[correct_num]; 
    return <ListGroup key="md" horizontal="md" className="my-2">
        <ListGroup.Item>{name}</ListGroup.Item>
        <ListGroup.Item>{parseInt(correct_num) > parseInt(num) ? '>' : '<'}{num}</ListGroup.Item>
        <ListGroup.Item>{precinct}</ListGroup.Item>
        {/* TODO: remove the ! */}
        <ListGroup.Item>{coordDistance(la1!, ll1!, la2!, ll2!)}m</ListGroup.Item>
    </ListGroup>
}

export default Guess;