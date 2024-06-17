import Sidebar from "./Sidebar";
import smallLogo from "../assets/smallLogo.png";
import Video from "../assets/vid.mp4";
import tempImage from "../assets/holder2.jpg";
import placeHolder from "../assets/holder.jpg";
import placeHolder2 from "../assets/place.jpg";
import { Row, Col } from "react-bootstrap";
import listIcon from "../assets/icons/list.svg";

import "bootstrap/dist/css/bootstrap.min.css";
function LandingPage() {
  return (
    <>
      <body>
        <nav className=" sticky-top">
          <a className="navbar-brand " href="#">
            <img src={smallLogo} alt="" className="logo" />
          </a>

          <button className="nav-link btn btn-primary">Log in</button>
        </nav>
        <div className="container-fluid px-0">
          <div className="container">
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
          <div className="image-columns">
            <div className="container col-xxl-8 px-4 py-0">
              <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
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
                <div class="col-lg-6">
                  <h1 class="display-6 fw-bold lh-1 mb-3">
                    See project progress at a glance
                  </h1>
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
              </div>
            </div>
            <div className="container col-xxl-8 px-4 py-1">
              <div class="row flex-lg-row align-items-center g-5 py-5">
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
                <div class="col-lg-6">
                  <h1 class="display-6 fw-bold lh-1 mb-3">
                    Break down complex work into simple tasks
                  </h1>{" "}
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
              </div>
            </div>
            <div className="container col-xxl-8 px-4 py-">
              <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
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
                <div class="col-lg-6">
                  <h1 class="display-6 fw-bold lh-1 mb-3">
                    Everything in one place
                  </h1>
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
