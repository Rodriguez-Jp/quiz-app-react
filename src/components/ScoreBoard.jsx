import { useContext } from "react";
import { QuizScoreContext } from "../context/QuizScoreContext";

export default function ScoreBoard() {
  const { score } = useContext(QuizScoreContext);

  return (
    <div>
      <h1>Your score is: {score}</h1>
    </div>
  );
}
