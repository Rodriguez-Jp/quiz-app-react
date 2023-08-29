import useQuiz from "../hooks/useQuiz";

export default function Play() {
  const quiz = useQuiz();

  console.log(quiz);
  return (
    <div>
      {quiz.map((questionState) => (
        <div key={questionState.id}>
          <h1>{questionState.question}</h1>
          <div>
            <button>{}</button>
          </div>
        </div>
      ))}
    </div>
  );
}
