import Cookies from "js-cookie";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/axios";

function Navbar() {
  const navigate = useNavigate();

  function logout() {
    const cookies = Cookies.get(); // Get all cookies

    for (const cookieName in cookies) {
      // Remove each cookie
      Cookies.remove(cookieName);
    }
    axiosInstance.post("/api/user/logout").then((res) => console.log(res));
  }
  let usersName = "null";
  if (Cookies.get("username")) {
    usersName = Cookies.get("username");
  }
  //console.log(props.cart.length);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <h1 onClick={() => navigate("/home")}>Foody</h1>

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
            <li className="nav-item">
              <h6
                className="pb-0 mb-0 "
                aria-current="page"
                onClick={() => navigate("/home")}
              >
                Home
              </h6>
            </li>
          </ul>
          <form className="d-flex">
            <h6 onClick={() => navigate("/profile")} className="me-5 pt-2">
              {usersName}
            </h6>

            <Link to="/login">
              <button
                className="btn btn-outline-dark"
                type="submit"
                onClick={logout}
              >
                Logout
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
