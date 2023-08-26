import { useState } from "react";

export const useShareableState = () => {
  const [playing, setPlaying] = useState(true)
  const [gameover, setGameover] = useState(false)

  return {
    playing,
    setPlaying,
    gameover,
    setGameover
  }
}