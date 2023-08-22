import { useCategories } from "../hooks/useCategories";

export default function SelectCategory() {
  const categories = useCategories();
  return (
    <div className="text-center ">
      <h1 className="text-4xl mb-10 font-semibold">Choose a category</h1>
      <select
        name="category"
        id="category"
        className=" p-2 rounded-lg text-xl border "
      >
        <option value={""}>Select Category</option>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
