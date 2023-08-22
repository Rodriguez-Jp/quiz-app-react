import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCategories } from "../hooks/useCategories";
import Category from "../components/Category";

export default function Index() {
  const categories = useCategories();

  return (
    <section>
      <div className="w-full mx-auto text-center mt-10">
        <h1 className="text-3xl font-bold text-customBlue mb-5">Welcome!</h1>
        <p className="text-2xl font-light">
          We are happy to see you again, let's play!
        </p>
      </div>
      <div className=" mx-auto text-center mt-5 max-w-5xl">
        <h1 className="text-2xl font-light mb-5">
          We have Quizes in all this categories :D
        </h1>
        <Link
          to={"form"}
          className="bg-customBlue p-2 rounded-lg text-lg font-semibold text-white hover:scale-105 transition-transform duration-200"
        >
          Play now
        </Link>
        <div className="grid grid-cols-4 mt-5 gap-5 items-center auto-rows-[minmax(1fr,_1fr)] p-5">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
