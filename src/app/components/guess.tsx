'use client'
import { ListGroup } from "react-bootstrap";
import { Building } from "../shared";

const toRadians = (angle: number ) => angle * (Math.PI / 180);
const sin = (n: number) => Math.sin(toRadians(n))
const cos = (n: number) => Math.cos(toRadians(n))

function coordDistance(la1: number, ll1: number, la2: number, ll2: number): number {
    return Math.round(Math.acos(sin(la1)*sin(la2) +cos(la1)*cos(la2)*cos(ll2-ll1)) * 6371000)  
}

function parseBuildingNum(num:string) {
    if (isNaN(Number(num[num.length-1]))) {
        return parseInt(num.slice(0, num.length - 1))
    }
    return parseInt(num)
}

function interpolateColour(dist: number, colour: number) {
    return (255 - colour) / 50 * dist + colour
}

interface GuessProps {
    buildings: Record<string, Building>
    num: string
    correct_num: string
}

const Guess: React.FC<GuessProps> = ({buildings, num, correct_num}) => {
    const {name, precinct: pGuess, latitude: la1, longitude: ll1 } = buildings[num]; 
    const {precinct: pAnswer, latitude: la2, longitude: ll2 } = buildings[correct_num];

    // building number distance from the actual number
    const dist = Math.min(50, Math.abs(parseBuildingNum(num) - parseBuildingNum(correct_num)))
    const style = {
        backgroundColor: `rgb(${interpolateColour(dist, 0x6f)}, ${interpolateColour(dist, 0xe3)}, ${interpolateColour(dist, 0x88)})`
    }

    return <ListGroup key="md" horizontal="md" className= "my-2 flex-fill d-flex">
        <ListGroup.Item className="flex-fill">{name}</ListGroup.Item>
        <ListGroup.Item className="flex-fill" style={style}>{num}</ListGroup.Item>
        <ListGroup.Item className="flex-fill" style={pAnswer === pGuess? {backgroundColor: "#6fe388"} : {backgroundColor: "white"}}>{pGuess}</ListGroup.Item>
        <ListGroup.Item className="flex-fill">{coordDistance(la1, ll1, la2, ll2)}m</ListGroup.Item>
    </ListGroup>
}

export default Guess;
