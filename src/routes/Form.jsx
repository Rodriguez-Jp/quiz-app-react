import { useState, useContext } from "react";
import { redirect } from "react-router-dom";
import SelectCategory from "../components/SelectCategory";
import Difficulty from "../components/Difficulty";
import TypeOfQuestion from "../components/TypeOfQuestion";
import { QuizInfoContext } from "../context/QuizInfoContext";

export default function Form() {
  const { formData, setFormData } = useContext(QuizInfoContext);

  const [page, setPage] = useState(0);

  const pageDisplay = (page) => {
    switch (page) {
      case 0:
        return <SelectCategory formData={formData} setFormData={setFormData} />;

      case 1:
        return <Difficulty formData={formData} setFormData={setFormData} />;

      case 2:
        return <TypeOfQuestion formData={formData} setFormData={setFormData} />;

      default:
        return;
    }
  };

  const handlePageClick = (e) => {
    e.preventDefault();
    setPage(page + 1);

    if (page >= 2) {
      return redirect("/play");
    } else if (page < 0) {
      setPage(2);
    }
  };

  return (
    <section>
      <div className="max-w-3xl shadow-xl  mx-auto mt-16 ">
        <form className="w-full p-20 flex flex-col justify-center bg-white rounded-xl">
          {pageDisplay(page)}
          <button
            onClick={(e) => handlePageClick(e)}
            className="mx-auto w-1/2 p-2 rounded-lg text-white bg-customBlue mt-10"
          >
            {page === 2 ? "Submit" : "Next"}
          </button>
        </form>
      </div>
    </section>
  );
}
