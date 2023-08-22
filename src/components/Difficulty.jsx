export default function Difficulty() {
  return (
    <div className="text-center ">
      <h1 className="text-4xl mb-10 font-semibold">
        How hard you want it to be?
      </h1>
      <select
        name="category"
        id="category"
        className=" p-2 rounded-lg text-xl border "
      >
        <option value="">Select Diffculty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}
