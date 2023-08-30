import { useState, useContext } from "react";
import useQuiz from "../hooks/useQuiz";
import { QuizScoreContext } from "../context/QuizScoreContext";
import NoQuestionsFound from "../components/NoQuestionsFound";
import ScoreBoard from "../components/ScoreBoard";
import QuizQuestions from "../components/QuizQuestions";

export default function Play() {
  const [isFinished, setIsFinished] = useState(false);
  const [actualQuestion, setActualQuestion] = useState(0);
  const quiz = useQuiz();
  const { score, setScore } = useContext(QuizScoreContext);

  const handleClick = (e) => {
    if (actualQuestion >= 9) {
      setIsFinished(true);
    }

    checkAnswer(e.target.textContent);
    setActualQuestion(actualQuestion + 1);
  };

  const checkAnswer = (answer) => {
    console.log(quiz[actualQuestion].correct_answer);
    if (answer === quiz[actualQuestion].correct_answer) {
      alert("Correct!");
      setScore(score + 10);
    }
  };

  return (
    <div>
      {!quiz.length ? (
        <NoQuestionsFound />
      ) : isFinished ? (
        <ScoreBoard />
      ) : (
        <QuizQuestions
          quiz={quiz}
          handleClick={handleClick}
          actualQuestion={actualQuestion}
        />
      )}
    </div>
  );
}
