import { useEffect, useState } from "react";
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
        <h1 className="text-2xl font-light">
          We have Quizes in all this categories :D
        </h1>
        <div className="grid grid-cols-4 mt-5 gap-5 items-center auto-rows-[minmax(1fr,_1fr)] p-5">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
