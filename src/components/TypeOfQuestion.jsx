export default function TypeOfQuestion({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({ ...formData, typeOfQuestion: e.target.value });
  };
  return (
    <div className="text-center ">
      <h1 className="text-4xl mb-10 font-semibold">Which type of questions?</h1>
      <select
        onChange={handleChange}
        name="type-of-question"
        id="type-of-question"
        className=" p-2 rounded-lg text-xl border "
      >
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True / False</option>
      </select>
    </div>
  );
}
