// This file probably does too much but oh well

import { useState, useRef } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { buildings } from "../shared"

const difficulties = {
  "easy": 1,
  "medium": 2,
  "hard": 3,
  "impossible": 4
}

export const useShareableState = () => {
  const [playing, setPlaying] = useState(true)
  const [gameover, setGameover] = useState(false)
  const [guessAmount, setGuessAmount] = useState(0)

  const select_element = useRef(null)
  const [wins, setWins] = useLocalStorage('wins', 0)
  const [plays, setPlays] = useLocalStorage('plays', 0)
  const [streak, setStreak] = useLocalStorage('streak', 0)
  const [difficulty, setDifficulty] = useLocalStorage('difficulty', 2)
  const [correct_answer, setCorrectAnswer] = useState("")

  const possible_buildings = Object.keys(buildings)
    // @ts-ignore
    .filter(k => difficulties[buildings[k].difficulty] <= difficulty)

  // TODO: Proper typing
  // @ts-ignore
  const getSelectValue: () => string | undefined = () => select_element.current?.state.selectValue[0]?.value;

  return {
    playing,
    setPlaying,
    gameover,
    setGameover,
    guessAmount,
    setGuessAmount,
    select_element,
    getSelectValue,
    wins,
    setWins,
    plays,
    setPlays,
    streak,
    setStreak,
    difficulty,
    setDifficulty,
    correct_answer,
    setCorrectAnswer,
    possible_buildings
  }
}