export default function Category({ category }) {
  return (
    <div className=" h-full p-5 rounded-xl bg-white shadow-lg text-customBlue hover:scale-105 hover:bg-customBlue hover:text-white transition-all duration-200 hover:cursor-pointer">
      <div className="p-2">
        <img
          src={`/images/categories/${category.id}.jpg`}
          alt={category.name}
          className="h-40 w-full rounded-xl"
        />
      </div>
      <div className="mt-5">
        <p className="font-light text-xl ">{category.name}</p>
      </div>
    </div>
  );
}
