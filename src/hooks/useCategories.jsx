import { useState, useEffect } from "react";

export function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch("https://opentdb.com/api_category.php");
        const results = await response.json();
        setCategories(results.trivia_categories);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
  }, []);

  return categories;
}
