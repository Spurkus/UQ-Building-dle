'use client'
import { ListGroup } from "react-bootstrap";
import { Building } from "../shared";

const toRadians = (angle: number ) => angle * (Math.PI / 180);
const sin = (n: number) => Math.sin(toRadians(n))
const cos = (n: number) => Math.cos(toRadians(n))

function coordDistance(la1: number, ll1: number, la2: number, ll2: number): number {
    const result = Math.round(Math.acos(sin(la1)*sin(la2) +cos(la1)*cos(la2)*cos(ll2-ll1)) * 6371000)
    // There was an edge case where it was NaN for some reason
    return isNaN(result) ? 0 : result 
}

function parseBuildingNum(num:string) {
    if (isNaN(Number(num[num.length-1]))) {
        return parseInt(num.slice(0, num.length - 1))
    }
    return parseInt(num)
}

function interpolateColour(dist: number, colour: number, start: number) {
    return (255 - colour) / start * dist + colour
}

function greenify(distance: number, start: number) {
    const dist = Math.min(start, distance)
    return `rgb(${interpolateColour(dist, 0x6f, start)}, ${interpolateColour(dist, 0xe3, start)}, ${interpolateColour(dist, 0x88, start)})`
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
    const dist = Math.abs(parseBuildingNum(num) - parseBuildingNum(correct_num))

    // Physical distance
    const dist_fr = coordDistance(la1, ll1, la2, ll2)

    return <ListGroup key="md" horizontal="sm" className= "my-2 flex-fill d-flex text-center">
        <ListGroup.Item className="small" style={{width: "40%"}}>{name}</ListGroup.Item>
        <ListGroup.Item  style={{backgroundColor: greenify(dist, 50), width: "10%"}}>{num}</ListGroup.Item>
        <ListGroup.Item className="small" style={ {backgroundColor: pAnswer === pGuess? "#6fe388" : "white", width: "35%"}}>{pGuess}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: greenify(dist_fr, 300), width: "15%"}}>{dist_fr}m</ListGroup.Item>
    </ListGroup>
}

export default Guess;
