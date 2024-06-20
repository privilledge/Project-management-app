import { Row, Col } from "react-bootstrap";
import TopBar from "./TopBar";

import Sidebar from "./Sidebar";
function Home() {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <TopBar />

        <div className="container">
          <div className="intro">
            <Row>
              <Col md={7} className="py-3">
                {" "}
                <h2 className="fw-bold py-0 mb-0">Hi Privilledge</h2>
                <small className="mb-0 mt-0">Welcome to your workspace</small>
              </Col>
              <Col md={5} className="py-4 create">
                {" "}
                <button className="btn">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.3em"
                    width="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      d="M12,18 L12,6 M6,12 L18,12"
                    ></path>
                  </svg>
                  Create project
                </button>
              </Col>
            </Row>
          </div>

          <div className="first">
            <div className="row home-cards">
              <div className=" col-lg-5">
                <div class="card">
                  <div class="card-body">
                    <h6 className="fw-bold">Your calendar</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div class="card">
                  <div className="card-body">
                    <h6 className="fw-bold">Tasks</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second mt-2">
            <div className="row home-cards">
              <div className=" col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h6 className="fw-bold">Project directory</h6>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h6 className="fw-bold">Your calendar</h6>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h6 className="fw-bold">Dashboards</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
