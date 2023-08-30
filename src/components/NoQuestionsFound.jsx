import { useNavigate } from "react-router-dom";

export default function NoQuestionsFound() {
  const navigate = useNavigate();

  return (
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
  );
}
