import { useState, useEffect } from "react";

export function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await fetch("https://opentdb.com/api_category.php");
      const results = await response.json();
      setCategories(results.trivia_categories);
    }
    getCategories();
  }, []);

  return categories;
}
