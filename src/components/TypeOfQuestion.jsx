export default function TypeOfQuestion() {
  return (
    <div className="text-center ">
      <h1 className="text-4xl mb-10 font-semibold">Which type of questions?</h1>
      <select
        name="category"
        id="category"
        className=" p-2 rounded-lg text-xl border "
      >
        <option value="">Select Type</option>
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True / False</option>
      </select>
    </div>
  );
}
