import { useState, useEffect, useContext } from "react";
import { QuizInfoContext } from "../context/QuizInfoContext";

export default function useCategories() {
  const {
    formData: { category, difficulty, typeOfQuestion },
    setFormData,
  } = useContext(QuizInfoContext);
  const [quiz, setQuiz] = useState([]);

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
              ["id"]: crypto.randomUUID(),
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

  return quiz;
}
