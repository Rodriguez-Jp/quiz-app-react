import { useState } from "react";
import useQuiz from "../hooks/useQuiz";

export default function Play() {
  const [actualQuestion, setActualQuestion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const quiz = useQuiz();

  const handleClick = (e) => {
    if (actualQuestion >= 9) {
      setIsFinished(true);
    }

    // checkAnswer(e.target.value)
    console.log(e.target.textContent);
    setActualQuestion(actualQuestion + 1);
  };

  console.log(quiz[actualQuestion]?.answers);
  return (
    // <></>
    <div>
      {isFinished ? (
        <h1>game over</h1>
      ) : (
        <div className="max-w-3xl mx-auto text-center mt-20 bg-white shadow-xl p-5 rounded-lg">
          <h1 className="text-3xl font-bold mb-10">
            {quiz[actualQuestion]?.question}
          </h1>
          <div className="flex flex-col">
            {quiz[actualQuestion]?.answers.map((answer, i) => (
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
