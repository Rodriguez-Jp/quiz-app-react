import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizScoreContext } from "../context/QuizScoreContext";

export default function Score() {
  const { score, setScore } = useContext(QuizScoreContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setScore(0);
    navigate("/");
  };

  return (
    <div className="max-w-2xl bg-white shadow-xl mx-auto mt-20 text-center rounded-lg">
      {score > 50 ? (
        <h1 className="text-3xl font-bold p-5">
          Congratulations, you are a Quiz Master!
        </h1>
      ) : (
        <h1 className="text-3xl font-bold p-5">You should practice more! :(</h1>
      )}
      <p className=" text-4xl font-thin p-5">Your score is:</p>
      <p
        className={`font-bold text-4xl p-5 ${
          score > 50 ? "text-green-600" : "text-red-600"
        }`}
      >
        {score}
      </p>
      <button
        className="w-1/2 p-2 text-xl font-light bg-customBlue mb-4 mt-5 text-white rounded-lg hover:scale-[102%] transition-transform duration-200"
        onClick={handleClick}
        key={crypto.randomUUID()}
      >
        Return to main menu
      </button>
    </div>
  );
}
