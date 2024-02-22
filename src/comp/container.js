import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";

import Nopage from "../pages/nopage";

import Login from "../pages/login";
import SignUp from "../pages/signUp";

import UserRoutes from "../utils/userRoute";
import Profile from "../pages/profile";
import axios from "axios";
import { axiosInstance } from "../api/axios";
import Cookies from "js-cookie";

//import Cookies from "js-cookie";

axios.defaults.baseURL = "http://localhost:6003";

//http://localhost:6003
//https://qdemy.onrender.com
//https://qdemy-ten.vercel.app

//axios default headers

axios.defaults.headers.common["Content-Type"] = "application/json";

axios.defaults.withCredentials = true;

const jwt_token = Cookies.get("token");
if (jwt_token) {
  axiosInstance.defaults.headers.common["token"] = jwt_token;
  console.log("setting axios container");
}

export default function MyContainer() {
  return (
    <Routes>
      {/* <Route index  element={<Home cart={cart} setcart={setcart}/>}></Route> */}
      <Route path="/signup" element={<SignUp />}></Route>

      <Route path="/login" element={<Login />}></Route>
      <Route element={<UserRoutes />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Route>

      <Route path="/" element={<Login />}></Route>
      <Route path="*" element={<Nopage />}></Route>
    </Routes>
  );
}
