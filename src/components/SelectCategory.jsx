import { useCategories } from "../hooks/useCategories";

export default function SelectCategory({ formData, setFormData }) {
  const categories = useCategories();

  const handleChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  return (
    <div className="text-center ">
      <h1 className="text-4xl mb-10 font-semibold">Choose a category</h1>
      <select
        onChange={handleChange}
        name="category"
        id="category"
        className=" p-2 rounded-lg text-xl border "
      >
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
