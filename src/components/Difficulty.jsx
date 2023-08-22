export default function Difficulty({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({ ...formData, difficulty: e.target.value });
  };
  return (
    <div className="text-center ">
      <h1 className="text-4xl mb-10 font-semibold">
        How hard you want it to be?
      </h1>
      <select
        onChange={handleChange}
        name="difficulty"
        id="difficulty"
        className=" p-2 rounded-lg text-xl border "
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}
