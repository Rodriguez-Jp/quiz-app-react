import { useContext } from "react";
import { QuizInfoContext } from "../context/QuizInfoContext";

export default function Play() {
  const { formData } = useContext(QuizInfoContext);

  return (
    <div>
      <p>{formData.category}</p>
      <p>{formData.difficulty}</p>
      <p>{formData.typeOfQuestion}</p>
    </div>
  );
}
