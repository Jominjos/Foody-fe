import React, { useEffect, useState } from "react";
import "../styles/signup.css";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
//

//
export default function SignUp() {
  useEffect(() => {
    axios.get("http://localhost:6003/wakeup").then((res) => {
      console.log(res);
    });
  }, []);

  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass1: "",
    pass2: "",
    dob: "",
    city: "",
    address: "",
    mobile: "",
    modeOfDelivery: "",
    latitude: "",
    longitude: "",
  });

  const NotifyE = (d) => {
    toast.error(d, {
      autoClose: 1500,
    });
  };
  // const NotifyS = (d) => {
  //   toast.success(d, {
  //     autoClose: 8000,
  //   });
  // };

  function userChange(event) {
    const [name, value] = [event.target.name, event.target.value];
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  function formsubmitted(event) {
    event.preventDefault();
    setLoading(true);
    if (user.pass1 === user.pass2) {
      formSub();
      async function formSub() {
        try {
          const res = await axios.post("http://localhost:6003/api/user/", {
            ...user,
            password: user.pass1,
          });
          console.log(res);
          setLoading(false);
          alert("Verification Mail Send ,Check Inbox and Spam Folder ");

          navigate("/login");
        } catch (err) {
          setLoading(false);
          NotifyE("user name or email already exist");
          //console.log(err);
        }
      }
    } else {
      NotifyE("password mismatch");
      setLoading(false);
    }

    //console.log("form submitted");
  }
  //console.log(user);
  return (
    <>
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-6 col-xl-5">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>
                  <form onSubmit={formsubmitted} className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          required
                          type="text"
                          id="form3Example1c"
                          name="name"
                          value={user.name}
                          onChange={userChange}
                          className="form-control"
                          minLength={3}
                        />
                        <label className="form-label" htmlFor="form3Example1c">
                          Name
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          required
                          type="email"
                          id="form3Example3c"
                          className="form-control"
                          name="email"
                          value={user.email}
                          onChange={userChange}
                        />
                        <label className="form-label" htmlFor="form3Example3c">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-2 ">
                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4c"
                          className="form-control"
                          name="pass1"
                          onChange={userChange}
                          value={user.pass1}
                          minLength={6}
                          required
                        />
                        <label className="form-label" htmlFor="form3Example4c">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-key fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4cd"
                          className="form-control"
                          name="pass2"
                          onChange={userChange}
                          value={user.pass2}
                          required
                        />
                        <label className="form-label" htmlFor="form3Example4cd">
                          Re-enter password
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-mobile-alt fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          required
                          type="tel"
                          id="mobile"
                          className="form-control"
                          name="mobile"
                          value={user.mobile}
                          onChange={userChange}
                          pattern="[0-9]{10}"
                        />
                        <label className="form-label" htmlFor="mobile">
                          Mobile Number (mandatory + 10 digit validation)
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-map-marker-alt fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          required
                          type="text"
                          id="address"
                          className="form-control"
                          name="address"
                          value={user.address}
                          onChange={userChange}
                        />
                        <label className="form-label" htmlFor="address">
                          Address with Pincode (mandatory)
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-city fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          required
                          type="text"
                          id="city"
                          className="form-control"
                          name="city"
                          value={user.city}
                          onChange={userChange}
                        />
                        <label className="form-label" htmlFor="city">
                          City (mandatory)
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-map-marker-alt fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="number"
                          id="longitude"
                          className="form-control"
                          name="longitude"
                          value={user.longitude}
                          onChange={userChange}
                        />
                        <label className="form-label" htmlFor="longitude">
                          Longitude (optional)
                        </label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-map-marker-alt fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="number"
                          id="latitude"
                          className="form-control"
                          name="latitude"
                          value={user.latitude}
                          onChange={userChange}
                        />
                        <label className="form-label" htmlFor="latitude">
                          Latitude (optional)
                        </label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-truck fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <select
                          id="modeOfDelivery"
                          className="form-select"
                          name="modeOfDelivery"
                          value={user.modeOfDelivery}
                          onChange={userChange}
                        >
                          <option value="">Select mode of delivery</option>
                          <option value="standard">Standard</option>
                          <option value="express">Express</option>
                        </select>
                        <label className="form-label" htmlFor="modeOfDelivery">
                          Mode of Delivery (optional)
                        </label>
                      </div>
                    </div>
                    <div className=" ps-3 mb-4">
                      Existing user ? <Link to={"/login"}>Login</Link>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      {loading ? (
                        <ClipLoader loading={loading} />
                      ) : (
                        <button type="submit" className="btn btn-dark btn-lg">
                          Register
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
