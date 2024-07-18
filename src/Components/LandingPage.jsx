import smallLogo from "../assets/smallLogo.png";
import Video from "../assets/vid.mp4";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setEmail } from "../Redux/Action";

function LandingPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [data, setData] = useState({ email: "" });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUp = () => {
    if (data.email.length > 0) {
      dispatch(setEmail(data.email));

      navigate(`/pma/signup`);
    }
  };
  return (
    <>
      <nav className=" sticky-top">
        <img src={smallLogo} alt="" className="logo navbar-brand" />
      </nav>
      <div className=" px-0">
        <div className="bg">
          <div className=" ">
            <div className="content">
              <div className="row ">
                <div className="col-lg-6 mt-4">
                  {" "}
                  <div className="fade-in">
                    <h2
                      className="intro-bold"
                      style={{
                        fontWeight: "600",
                        color: "#253858",
                        fontSize: "28px",
                      }}
                    >
                      Experience comprehensive task management with a personnal
                      touch
                    </h2>
                    <h5
                      className="mt-3"
                      style={{
                        fontWeight: "400",
                        color: "#253858",
                        fontSize: "18px",
                      }}
                    >
                      Break down complex work into simple tasks with
                      myWorkSpace.
                    </h5>
                  </div>
                  <div className="video-container mt-5">
                    <iframe
                      title="Video"
                      src={Video}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div className="mt-3 demo-link">
                    {" "}
                    <Link to="/pma/home">
                      {" "}
                      <a
                        href="#"
                        className="demo-link btn btn-outline-secondary"
                        style={{}}
                      >
                        Demo
                        <svg
                          stroke="currentColor"
                          fill="#253858"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1.2em"
                          width="1.2em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path>
                          </g>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 sign-form mt-3">
                  <section className="w-100  p-2 d-flex justify-content-center pb-4 m-4">
                    <form className="card sign-card">
                      <div
                        data-mdb-input-init
                        className="form-outline mb-3 text-center"
                      >
                        <h3 className=" fw-bold">Get started</h3>
                        <p>It is free - no credit card needed.</p>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <h6>Email</h6>
                        <input
                          type="email"
                          className="form-control"
                          value={data.email}
                          name="email"
                          onChange={handleOnchange}
                          required
                        />
                      </div>
                      <small>
                        I agree to the{" "}
                        <a href="#">workspace customer agreement</a>,<br />{" "}
                        which incoporates by reference the AI product-
                        <br />
                        specific terms and acknowledge the{" "}
                        <a href="#">privacy policy</a>
                      </small>

                      <button
                        data-mdb-ripple-init
                        type="button"
                        className="btn btn-primary btn-block mb-0 mt-3"
                        onClick={handleSignUp}
                      >
                        Sign up
                      </button>
                      <small className="text-center mb-4">
                        Already have an account?{" "}
                        <Link to={"/pma/login"}>
                          <a href="#">Log in</a>
                        </Link>
                      </small>
                      <div className="text-center">
                        <p>Or sign up with:</p>
                        <button
                          data-mdb-ripple-init
                          type="button"
                          className="btn btn-light btn-floating mx-1"
                        >
                          {/* google */}
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            version="1.1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 48 48"
                            enableBackground="new 0 0 48 48"
                            height="1.2em"
                            width="1.2em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#FFC107"
                              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                            <path
                              fill="#FF3D00"
                              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            ></path>
                            <path
                              fill="#4CAF50"
                              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            ></path>
                            <path
                              fill="#1976D2"
                              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                          </svg>
                        </button>

                        <button
                          data-mdb-ripple-init
                          type="button"
                          className="btn btn-light btn-floating mx-1"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1.2em"
                            width="1.2em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-10.6 267c-14.3 19.9-28.7 35.6-41.9 45.7-10.5 8-18.6 11.4-24 11.6-9-.1-17.7-2.3-34.7-8.8-1.2-.5-2.5-1-4.2-1.6l-4.4-1.7c-17.4-6.7-27.8-10.3-41.1-13.8-18.6-4.8-37.1-7.4-56.9-7.4-20.2 0-39.2 2.5-58.1 7.2-13.9 3.5-25.6 7.4-42.7 13.8-.7.3-8.1 3.1-10.2 3.9-3.5 1.3-6.2 2.3-8.7 3.2-10.4 3.6-17 5.1-22.9 5.2-.7 0-1.3-.1-1.8-.2-1.1-.2-2.5-.6-4.1-1.3-4.5-1.8-9.9-5.1-16-9.8-14-10.9-29.4-28-45.1-49.9-27.5-38.6-53.5-89.8-66-125.7-15.4-44.8-23-87.7-23-128.6 0-60.2 17.8-106 48.4-137.1 26.3-26.6 61.7-41.5 97.8-42.3 5.9.1 14.5 1.5 25.4 4.5 8.6 2.3 18 5.4 30.7 9.9 3.8 1.4 16.9 6.1 18.5 6.7 7.7 2.8 13.5 4.8 19.2 6.6 18.2 5.8 32.3 9 47.6 9 15.5 0 28.8-3.3 47.7-9.8 7.1-2.4 32.9-12 37.5-13.6 25.6-9.1 44.5-14 60.8-15.2 4.8-.4 9.1-.4 13.2-.1 22.7 1.8 42.1 6.3 58.6 13.8-37.6 43.4-57 96.5-56.9 158.4-.3 14.7.9 31.7 5.1 51.8 6.4 30.5 18.6 60.7 37.9 89 14.7 21.5 32.9 40.9 54.7 57.8-11.5 23.7-25.6 48.2-40.4 68.8zm-94.5-572c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
                          </svg>
                        </button>

                        <button
                          data-mdb-ripple-init
                          type="button"
                          className="btn btn-light btn-floating mx-1"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            height="1.2em"
                            width="1.2em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"></path>
                          </svg>
                        </button>

                        <button
                          data-mdb-ripple-init
                          type="button"
                          className="btn btn-light btn-floating mx-1"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 496 512"
                            height="1.2em"
                            width="1.2em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                          </svg>
                        </button>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
