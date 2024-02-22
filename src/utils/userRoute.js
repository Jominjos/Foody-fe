import Cookies from "js-cookie";
import { Outlet, Navigate } from "react-router-dom";

const UserRoutes = () => {
  let role = Cookies.get("role");
  let token = Cookies.get("token");
  // auth ? console.log("true") : console.log("false");

  if (token && role === "user") {
    return <Outlet />;
  } else if (token && role === "admin") {
    return <Navigate to="/course" />;
  } else {
    return <Navigate to="/login" />;
  }
};
export default UserRoutes;
