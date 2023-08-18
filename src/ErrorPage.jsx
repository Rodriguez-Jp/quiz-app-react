import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <p>Page wasnt found!</p>
      <Link to={"/"}>Get back to main page</Link>
    </div>
  );
}
