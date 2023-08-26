import { useState } from "react";

export const useShareableState = () => {
  const [playing, setPlaying] = useState(true)
  const [gameover, setGameover] = useState(false)
  const [guessAmount, setGuessAmount] = useState(0)

  return {
    playing,
    setPlaying,
    gameover,
    setGameover,
    guessAmount,
    setGuessAmount
  }
}