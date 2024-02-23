import { Link } from "react-router-dom";

export default function Authnavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <h2>Qdemy</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <h6 className="mb-0">Skill up and Scale up</h6>
          </ul>
          <form className="d-flex">
            <Link to="/login">
              <button className="btn btn-outline-dark me-3" type="submit">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-dark" type="submit">
                SignUp
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
