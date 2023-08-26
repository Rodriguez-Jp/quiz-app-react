import { useContext, useEffect, useState } from "react";
import { QuizInfoContext } from "../context/QuizInfoContext";

export default function Play() {
  const {
    formData: { category, difficulty, typeOfQuestion },
  } = useContext(QuizInfoContext);
  const [quiz, setQuiz] = useState({});

  useEffect(() => {
    async function getQuiz() {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${typeOfQuestion}`
        );
        const result = await response.json();
        setQuiz(result.results);
      } catch (error) {
        console.log(error);
      }
    }
    getQuiz();
  }, []);

  console.log(quiz);

  return <div></div>;
}
