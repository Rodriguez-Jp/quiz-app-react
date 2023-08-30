export default function QuizQuestions({ quiz, handleClick, actualQuestion }) {
  return (
    <div className="max-w-3xl mx-auto text-center mt-20 bg-white shadow-xl p-5 rounded-lg">
      <div className="text-xl p-2 font-bold">
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
  );
}
