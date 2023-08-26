import { useState } from "react";
import ignore_buildings from "../buildings.json";


// Maybe we should move this somewhere else idk
export interface Building {
  name: string;
  precinct: string;
  latitude: number;
  longitude: number;
}

export const useShareableState = () => {
  const [playing, setPlaying] = useState(true)
  const [gameover, setGameover] = useState(false)

  function randElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Make Typescript happy
  const buildings: Record<string, Building> = ignore_buildings;

  const select_options = Object.keys(buildings).map((num) => {return {value: num, label: `${num} - ${buildings[num].name}`}})
  .filter(({value}) => buildings[value].latitude !== null)

  const correct_answer = randElement(select_options.map(v => v.value))

  return {
    playing,
    setPlaying,
    gameover,
    setGameover,
    buildings,
    select_options,
    correct_answer
  }
}