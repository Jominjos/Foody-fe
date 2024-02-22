import Cookies from "js-cookie";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoutes = () => {
  let role = Cookies.get("role");
  let token = Cookies.get("token");
  // auth ? console.log("true") : console.log("false");
  if (token && role === "admin") {
    return <Outlet />;
  } else if (token && role === "user") {
    return <Navigate to="/home" />;
  } else {
    return <Navigate to="/login" />;
  }
};
export default AdminRoutes;
