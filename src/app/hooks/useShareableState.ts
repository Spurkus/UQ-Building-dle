import { useState, useRef } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useShareableState = () => {
  const [playing, setPlaying] = useState(true)
  const [gameover, setGameover] = useState(false)
  const [guessAmount, setGuessAmount] = useState(0)

  const select_element = useRef(null)
  const [wins, setWins] = useLocalStorage('wins', 0)
  const [plays, setPlays] = useLocalStorage('plays', 0)
  const [streak, setStreak] = useLocalStorage('streak', 0)

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
    setStreak
  }
}