import { useState, createContext } from "react";

export const QuizScoreContext = createContext();

export default function QuizScoreContextProvider({ children }) {
  //Format for the API request
  const [score, setScore] = useState(0);

  const dataScore = { score, setScore };

  return (
    <QuizScoreContext.Provider value={dataScore}>
      {children}
    </QuizScoreContext.Provider>
  );
}
