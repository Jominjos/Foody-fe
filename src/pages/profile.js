import React, { useEffect, useState } from "react";
import Navbar from "../comp/navbar";

import { axiosInstance } from "../api/axios";

function Profile(props) {
  const [user, setUser] = useState({
    user_name: "fetching",
    user_email: "fetching",
    user_role: "fetching",
  });

  useEffect(() => {
    axiosInstance.get("/api/user/profile").then((res) => {
      let user_name = res.data.message.name;
      let user_email = res.data.message.email;
      let user_role = res.data.message.role;
      setUser({ user_name, user_email, user_role });
      console.log(res.data.message);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <section className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-4 mb-sm-5">
                <div className="card card-style1 border-0">
                  <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                    <div className="row align-items-center">
                      <div className="col-lg-6 mb-4 mb-lg-0 p-0 m-0 ">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-6 px-xl-10">
                        <h3 className="  h2 text-dark mb-4 ps-4">
                          {user.user_name}
                        </h3>

                        <ul className="list-unstyled mb-1-9">
                          <li className="mb-2 mb-xl-3 display-28">
                            <span className="display-26 text-secondary me-2 font-weight-600">
                              Role:
                            </span>{" "}
                            {user.user_role}
                          </li>

                          <li className="mb-2 mb-xl-3 display-28">
                            <span className="display-26 text-secondary me-2 font-weight-600">
                              Email:
                            </span>{" "}
                            {user.user_email}
                          </li>
                        </ul>
                        <ul className="social-icon-style1 list-unstyled mb-0 ps-0">
                          <li>
                            <a href="#!">
                              <i className="ti-twitter-alt" />
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="ti-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="ti-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="ti-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Profile;
