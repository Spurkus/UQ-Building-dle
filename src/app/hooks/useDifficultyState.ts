import { useLocalStorage } from "./useLocalStorage";
import { buildings } from "../shared"

const difficulties = {
  "easy": 1,
  "medium": 2,
  "hard": 3,
  "impossible": 4
}

export const useDifficultyState = () => {
  const [difficulty, setDifficulty] = useLocalStorage('difficulty', 2)

  const possible_buildings = Object.keys(buildings)
  // @ts-ignore
  .filter(k => difficulties[buildings[k].difficulty] <= difficulty)
  
  return {
    difficulty,
    setDifficulty,
    possible_buildings
    }
}