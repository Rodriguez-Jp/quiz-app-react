import { useContext, useEffect, useState } from "react";
import { QuizInfoContext } from "../context/QuizInfoContext";

export default function Play() {
  const {
    formData: { category, difficulty, typeOfQuestion },
    setFormData,
  } = useContext(QuizInfoContext);
  const [quiz, setQuiz] = useState({});

  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${typeOfQuestion}`;
    async function getQuiz() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        //Transform the array into a easy format
        const quizArr = result.results.reduce(
          (acc, state) => [
            ...acc,
            {
              ["question"]: state.question,
              ["answers"]: [...state.incorrect_answers, state.correct_answer],
              ["correct_answer"]: state.correct_answer,
            },
          ],
          []
        );
        setQuiz(quizArr);
      } catch (error) {
        console.log(error);
      }
    }
    getQuiz();
    setFormData({
      category: "9",
      difficulty: "easy",
      typeOfQuestion: "multiple",
    });
  }, []);

  return (
    <div>
      {/* {quiz.map((questionState) => (
        <div>
          <h1>{questionState.question}</h1>
          <div>
            <button>{}</button>
          </div>
        </div>
      ))} */}
    </div>
  );
}
