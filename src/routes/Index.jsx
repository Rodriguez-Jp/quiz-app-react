import { useEffect, useState } from "react";
import { useCategories } from "../hooks/useCategories";

export default function Index() {
  const categories = useCategories();

  return (
    <section>
      <div className="w-full mx-auto text-center">
        <h1>Welcome!</h1>
        <p>We are happy to see you again, let's play!</p>
      </div>
      <div className="w-full mx-auto text-center">
        <h1>We have Quizes in all this categories :D</h1>
        <div className="grid grid-cols-3 mt-10">
          {categories.map((categorie) => (
            <h1 key={categorie.id}>{categorie.name}</h1>
          ))}
        </div>
      </div>
    </section>
  );
}
