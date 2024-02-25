import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <main className="ErrorPage">
      404 not Found
      <Link to="/">Back to Home </Link>
    </main>
  );
}

export default ErrorPage;
