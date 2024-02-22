import { Link } from "react-router-dom";
export default function Nopage() {
  return (
    <>
      <h1>Error 404 Page not found</h1>
      <Link to="/home">Home</Link>
    </>
  );
}
