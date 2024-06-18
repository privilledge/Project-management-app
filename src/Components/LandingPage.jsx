import Sidebar from "./Sidebar";
import smallLogo from "../assets/smallLogo.png";
import Video from "../assets/vid.mp4";
import tempImage from "../assets/holder2.jpg";
import placeHolder from "../assets/holder.jpg";
import placeHolder2 from "../assets/place.jpg";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
function LandingPage() {
  const navigate = useNavigate();

  const homePage = () => {
    navigate("/pma/home");
  };
  return (
    <>
      <body>
        <nav className=" sticky-top">
          <a className="navbar-brand " href="#">
            <img src={smallLogo} alt="" className="logo" />
          </a>

          <button className="nav-link btn btn-primary" onClick={homePage}>
            Log in
          </button>
        </nav>
        <div className="container-fluid px-0">
          <div className="bg">
            <div className="container ">
              <div className="content text-center py-4">
                <h1 className="display-4">
                  Project management
                  <br /> made personal
                </h1>
                <br />
                <h5 className="lead">
                  Experience comprehensive task management <br />
                  with a personnal touch.
                </h5>

                <button className="signup btn-lg btn mt-3 ">
                  Get myWorkSpace free
                </button>
                <br />
                <small>
                  <svg
                    className=" mb-1"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.516,14.323l-1.49,6.452c-0.092,0.399,0.068,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22 c0.193,0,0.387-0.056,0.555-0.168L12,18.202l5.445,3.63c0.348,0.232,0.805,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082 l-1.829-6.4l4.536-4.082c0.297-0.268,0.406-0.686,0.278-1.064c-0.129-0.378-0.47-0.644-0.868-0.676L15.378,8.05l-2.467-5.461 C12.75,2.23,12.393,2,12,2s-0.75,0.23-0.911,0.589L8.622,8.05L2.921,8.503C2.529,8.534,2.192,8.791,2.06,9.16 c-0.134,0.369-0.038,0.782,0.242,1.056L6.516,14.323z M9.369,9.997c0.363-0.029,0.683-0.253,0.832-0.586L12,5.43l1.799,3.981 c0.149,0.333,0.469,0.557,0.832,0.586l3.972,0.315l-3.271,2.944c-0.284,0.256-0.397,0.65-0.293,1.018l1.253,4.385l-3.736-2.491 c-0.336-0.225-0.773-0.225-1.109,0l-3.904,2.603l1.05-4.546c0.078-0.34-0.026-0.697-0.276-0.94l-3.038-2.962L9.369,9.997z"></path>
                  </svg>
                  <span>Best productivity app</span>
                  <svg
                    className=" mb-1"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.516,14.323l-1.49,6.452c-0.092,0.399,0.068,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22 c0.193,0,0.387-0.056,0.555-0.168L12,18.202l5.445,3.63c0.348,0.232,0.805,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082 l-1.829-6.4l4.536-4.082c0.297-0.268,0.406-0.686,0.278-1.064c-0.129-0.378-0.47-0.644-0.868-0.676L15.378,8.05l-2.467-5.461 C12.75,2.23,12.393,2,12,2s-0.75,0.23-0.911,0.589L8.622,8.05L2.921,8.503C2.529,8.534,2.192,8.791,2.06,9.16 c-0.134,0.369-0.038,0.782,0.242,1.056L6.516,14.323z M9.369,9.997c0.363-0.029,0.683-0.253,0.832-0.586L12,5.43l1.799,3.981 c0.149,0.333,0.469,0.557,0.832,0.586l3.972,0.315l-3.271,2.944c-0.284,0.256-0.397,0.65-0.293,1.018l1.253,4.385l-3.736-2.491 c-0.336-0.225-0.773-0.225-1.109,0l-3.904,2.603l1.05-4.546c0.078-0.34-0.026-0.697-0.276-0.94l-3.038-2.962L9.369,9.997z"></path>
                  </svg>
                </small>
                <br />

                <div className="video-container mt-5">
                  <iframe
                    title="Video"
                    src={Video}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="image-columns">
            <div className="container col-xxl-8 px-4 py-0">
              <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-lg-6">
                  <h3 class=" fw-bold lh-1 mb-3">
                    See project progress at a glance
                  </h3>
                  <hr />
                  <p class="lead ">
                    One source of truth means ultimate visibility into
                    bottlenecks, risks, resourcing struggles and more.
                    Dashboards surface real-time progress so you're always a
                    step ahead.
                  </p>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button
                      type="button"
                      class="btn btn-outline-info btn-lg px-4 me-md-2"
                    >
                      Get started
                    </button>
                  </div>
                </div>
                <div class="col-10 col-sm-8 col-lg-6">
                  <img
                    src={placeHolder}
                    class="d-block mx-lg-auto img-fluid"
                    alt="Bootstrap Themes"
                    width="700"
                    height="500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="container col-xxl-8 px-4 py-">
              <div class="row flex-lg-row align-items-center g-5 py-5">
                <div class="col-lg-6">
                  <h3 class="fw-bold lh-1 mb-3">Everything in one place</h3>
                  <hr />
                  <p class="lead ">
                    Spend less time trying to get aligned and more time driving
                    projects forward with confidence.Integrate with every tool
                    you use to get work done.
                  </p>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button
                      type="button"
                      class="btn btn-outline-info btn-lg px-4 me-md-2"
                    >
                      Explore features
                    </button>
                  </div>
                </div>
                <div class="col-10 col-sm-8 col-lg-6">
                  <img
                    src={placeHolder2}
                    class="d-block mx-lg-auto img-fluid"
                    alt="Bootstrap Themes"
                    width="700"
                    height="500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="container col-xxl-8 px-4 py-1">
              <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-lg-6">
                  <h3 class="fw-bold lh-1 mb-3">
                    Break down complex work into simple tasks
                  </h3>{" "}
                  <hr />
                  <p class="lead">
                    Plan, organize, and collaborate on any company objective
                    with powerful task management that can be customized for
                    every need and at every level.
                  </p>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button
                      type="button"
                      class="btn  btn-outline-info btn-lg px-4 me-md-2"
                    >
                      Get started
                    </button>
                  </div>
                </div>
                <div class="col-10 col-sm-8 col-lg-6">
                  <img
                    src={tempImage}
                    class="d-block mx-lg-auto img-fluid"
                    alt="Bootstrap Themes"
                    width="700"
                    height="500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <section className="hero">
            <div className="row px-5 py-5">
              <Row className="features">
                <span className="fw-bold text-center">myWorkSpace 101</span>
                <h1 className="display-6 text-center fw-bold">
                  A productivity powerhouse
                </h1>
                <p className="fw-bold text-center">
                  Simple, flexible, and powerful. All it takes are boards,
                  lists, and cards to get a clear view of who’s doing what and
                  what needs to get done.{" "}
                </p>

                <div className="container">
                  <div className="row features-cards justify-content-between">
                    <div className="col-md-3 mx-3 mb-5 mx-md-5 card">
                      <div className="p-3 bg-light">
                        <h5 className="fw-bold">Boards</h5>
                        <p>
                          Trello boards keep tasks organized and work moving
                          forward. In a glance, see everything from “things to
                          do” to “aww yeah, we did it!”
                        </p>
                        <button className="btn  btn-outline-info">
                          Sign up
                        </button>
                      </div>
                    </div>
                    <div className="col-md-3 mx-3 mb-5 mx-md-5 card">
                      <div className="p-3  bg-light">
                        <h5 className="fw-bold">Lists</h5>

                        <p>
                          The different stages of a task. Start as simple as
                          ToDo, Doing, done or build a workflow custom for you.
                          There is no wrong way with myWorkSpace
                        </p>
                        <button className="btn  btn-outline-info">
                          Try for free
                        </button>
                      </div>
                    </div>
                    <div className="col-md-3 mx-3 mb-5 mx-md-5 card">
                      <div className="p-3  bg-light">
                        <h5 className="fw-bold">Cards</h5>
                        <p>
                          Cards represent tasks or ideas and hold all the
                          information to get the job done. As you make progress,
                          move cards across lists as to show their progress
                        </p>
                        <button className="btn  btn-outline-info">
                          Get started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </section>

          <section className="footer">
            <div className="row px-5 py-3">
              <span className="fw-bold">
                Copyright@2024 Privilledge Mashegede
              </span>
            </div>
          </section>
        </div>
      </body>
    </>
  );
}
export default LandingPage;
