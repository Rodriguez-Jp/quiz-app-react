import { useState, useContext } from "react";
import useQuiz from "../hooks/useQuiz";
import { useNavigate } from "react-router-dom";
import { QuizScoreContext } from "../context/QuizScoreContext";

export default function Play() {
  const [actualQuestion, setActualQuestion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();
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
        <div className="max-w-3xl mx-auto text-center mt-20 bg-white shadow-xl p-5 rounded-lg">
          <h1 className="text-3xl font-bold mb-10">
            No questions finded for your search
          </h1>
          <button
            className="p-2 bg-customBlue text-white text-xl rounded-lg"
            onClick={() => navigate("/form")}
          >
            Go back to form
          </button>
        </div>
      ) : isFinished ? (
        <h1>game over</h1>
      ) : (
        <div className="max-w-3xl mx-auto text-center mt-20 bg-white shadow-xl p-5 rounded-lg">
          <div className="text-lg   p-2">
            <h2>{actualQuestion + 1} / 10</h2>
          </div>
          <h1 className="text-3xl font-bold mb-10">
            {quiz[actualQuestion]?.question}
          </h1>
          <div className="flex flex-col">
            {quiz[actualQuestion]?.answers.map((answer) => (
              <button
                className="w-full p-2 text-xl font-light bg-customBlue mb-4 text-white rounded-lg hover:scale-[102%] transition-transform duration-200"
                onClick={handleClick}
                key={crypto.randomUUID()}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
