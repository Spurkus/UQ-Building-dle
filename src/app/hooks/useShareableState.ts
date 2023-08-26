import { useState, useRef } from "react";

export const useShareableState = () => {
  const [playing, setPlaying] = useState(true)
  const [gameover, setGameover] = useState(false)
  const [guessAmount, setGuessAmount] = useState(0)

  const select_element = useRef(null)

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
    getSelectValue
  }
}