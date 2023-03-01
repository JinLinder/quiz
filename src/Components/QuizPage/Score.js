import React from "react";
import { useSelector } from "react-redux";
import { ScoreWrapper } from "../../style/QuizPage/ScoreStyle";

export default function Score() {
  const score = useSelector((state) => state.score);
  return <ScoreWrapper>My score : {score}</ScoreWrapper>;
}
