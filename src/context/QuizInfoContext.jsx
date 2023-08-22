import { useState, createContext } from "react";

export const QuizInfoContext = createContext();

export default function QuizInfoContextProvider({ children }) {
  const [formData, setFormData] = useState({
    category: "9",
    difficulty: "easy",
    typeOfQuestion: "multiple",
  });

  const data = {
    formData,
    setFormData,
  };
  return (
    <QuizInfoContext.Provider value={data}>{children}</QuizInfoContext.Provider>
  );
}
