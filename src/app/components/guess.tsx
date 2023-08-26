'use client'
import { ListGroup } from "react-bootstrap";
import { Building } from "./buildingDle";

interface GuessProps {
    buildings: Record<string, Building>
    num: string
}

const Guess: React.FC<GuessProps> = ({buildings, num}) => {
    const {name, precinct } = buildings[num]; 
    return <ListGroup key="md" horizontal="md" className="my-2">
        <ListGroup.Item>{name}</ListGroup.Item>
        <ListGroup.Item>{'>'} {num}</ListGroup.Item>
        <ListGroup.Item>{precinct}</ListGroup.Item>
        <ListGroup.Item>100m</ListGroup.Item>
    </ListGroup>
}

export default Guess;
