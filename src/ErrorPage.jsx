import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center pb-32">
        <h1 className="text-red-500 font-bold text-4xl p-2">Error :(</h1>
        <p className="text-2xl font-light">
          Page wasn't found, please check the url
        </p>
        <Link to={"/"} className="bg-customBlue p-2 text-white rounded-lg mt-5">
          Get back to main page
        </Link>
      </div>
    </>
  );
}
