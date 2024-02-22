import axios from "axios";
//import Cookies from "js-cookie"; // Import the 'js-cookie' library

//http://localhost:6003
//https://qdemy.onrender.com
//https://qdemy-ten.vercel.app

export const axiosInstance = axios.create({
  baseURL: "http://localhost:6003", // Set your API base URL
  headers: {
    "Content-Type": "application/json",
    //token: Cookies.get("token"), // Add any authentication headers
  },
  withCredentials: true,
});

//
// const axiosWithToken = axios.create();

// axiosWithToken.interceptors.request.use(
//   (config) => {
//     const jwtToken = Cookies.get("token"); // Retrieve the token from cookies

//     if (jwtToken) {
//       config.headers["token"] = jwtToken; // Set the 'token' header if the token is available
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default axiosWithToken;
