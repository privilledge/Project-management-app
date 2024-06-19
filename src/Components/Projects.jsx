import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <>
      <Sidebar />
      <div className="main-content ">
        <TopBar />
        <div
          className=" card m-3 p-4"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "7px",
            minHeight: "35rem",
          }}
        >
          <div className="row top">
            <div className="col-lg-6 col-md-6 tabs mt-2">Tabs here</div>
            <div className="create col-lg-6 col-md-6 mt-0">
              <a href="#" className="" style={{ color: "#775da6" }}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1.3em"
                  width="1.3em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="#775da6"
                    stroke-width="2"
                    d="M12,18 L12,6 M6,12 L18,12"
                  ></path>
                </svg>
                Create project
              </a>
            </div>
          </div>
          <div className="projects-cards mt-5">
            <Row>
              <Col md={4}>
                <div className="card done p-1 mb-1">
                  <div className="card-body">
                    {" "}
                    <div className="row d-flex">
                      <div className="col-7">
                        {" "}
                        <h6 className="fw-bold">Project name</h6>
                      </div>

                      <div className="status-btn col-5 mb-1">
                        <button className="status" style={{ width: "6rem" }}>
                          status
                        </button>
                      </div>
                    </div>
                    <div className="description">
                      <p>
                        This is the project description. It is a short summary
                        of what the projects is about
                      </p>
                    </div>
                    <div className="dates">
                      <h6 style={{ fontSize: "14px" }}>
                        Added date : 06/08/2024
                      </h6>
                      <h6 style={{ fontSize: "14px" }}>
                        Due date : 19/11/2024
                      </h6>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="card in-progress p-1 mb-1">
                  <div className="card-body">
                    <div className="row d-flex">
                      <div className="col">
                        {" "}
                        <h6 className="fw-bold">Project name</h6>
                      </div>

                      <div className="status-btn col mb-1">
                        <button className="status" style={{ width: "6rem" }}>
                          status
                        </button>
                      </div>
                    </div>
                    <div className="description">
                      <p>
                        This is the project description. It is a short summary
                        of what the projects is about
                      </p>
                    </div>
                    <div className="dates">
                      <h6 style={{ fontSize: "14px" }}>
                        Added date : 06/08/2024
                      </h6>
                      <h6 style={{ fontSize: "14px" }}>
                        Due date : 19/11/2024
                      </h6>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="card new p-1 mb-1">
                  <div className="card-body">
                    {" "}
                    <div className="row d-flex">
                      <div className="col">
                        {" "}
                        <h6 className="fw-bold">Project name</h6>
                      </div>

                      <div className="status-btn col mb-1">
                        <button className="status" style={{ width: "6rem" }}>
                          status
                        </button>
                      </div>
                    </div>
                    <div className="description">
                      <p>
                        This is the project description. It is a short summary
                        of what the projects is about
                      </p>
                    </div>
                    <div className="dates">
                      <h6 style={{ fontSize: "14px" }}>
                        Added date : 06/08/2024
                      </h6>
                      <h6 style={{ fontSize: "14px" }}>
                        Due date : 19/11/2024
                      </h6>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="card new p-1 mb-1">
                  <div className="card-body">
                    {" "}
                    <div className="row d-flex">
                      <div className="col">
                        {" "}
                        <h6 className="fw-bold">Project name</h6>
                      </div>

                      <div className="status-btn col mb-1">
                        <button className="status" style={{ width: "6rem" }}>
                          status
                        </button>
                      </div>
                    </div>
                    <div className="description">
                      <p>
                        This is the project description. It is a short summary
                        of what the projects is about
                      </p>
                    </div>
                    <div className="dates">
                      <h6 style={{ fontSize: "14px" }}>
                        Added date : 06/08/2024
                      </h6>
                      <h6 style={{ fontSize: "14px" }}>
                        Due date : 19/11/2024
                      </h6>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="card done p-1 mb-1">
                  <div className="card-body">
                    {" "}
                    <div className="row d-flex">
                      <div className="col">
                        {" "}
                        <h6 className="fw-bold">Project name</h6>
                      </div>

                      <div className="status-btn col mb-1">
                        <button className="status" style={{ width: "6rem" }}>
                          status
                        </button>
                      </div>
                    </div>
                    <div className="description">
                      <p>
                        This is the project description. It is a short summary
                        of what the projects is about
                      </p>
                    </div>
                    <div className="dates">
                      <h6 style={{ fontSize: "14px" }}>
                        Added date : 06/08/2024
                      </h6>
                      <h6 style={{ fontSize: "14px" }}>
                        Due date : 19/11/2024
                      </h6>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
export default Projects;
