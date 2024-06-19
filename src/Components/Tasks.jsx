import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Col } from "react-bootstrap";

function Tasks() {
  return (
    <>
      <Sidebar />

      <div className="main-content">
        <TopBar />
        <div className="container">
          <div className="row mt-2">
            <Col md="4">
              <div className="card task p-0 mb-2 todo-tasks">
                <div className="card-body">
                  <h6 className="fw-bold mb-4" style={{ fontSize: "18px" }}>
                    To-do
                  </h6>
                  <div className="mt-3">
                    <div className="tasks-list">
                      <div className="row">
                        <Col className="col-lg-8 col-md-7 col-sm-7">
                          <span className="p-1" style={{ fontWeight: "500" }}>
                            Finish this component
                          </span>
                        </Col>
                        <Col
                          className="col-lg-4 col-sm-6  col-md-5"
                          style={{ textAlign: "right" }}
                        >
                          <span style={{ cursor: "pointer" }}>
                            <svg
                              stroke="currentColor"
                              fill="#0096FF"
                              stroke-width="0"
                              viewBox="0 0 1024 1024"
                              height="1.3em"
                              width="1.3em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                              <path d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path>
                            </svg>
                          </span>
                          <span className="p-2" style={{ cursor: "pointer" }}>
                            <svg
                              stroke="currentColor"
                              fill="#C41E3A"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              height="1.5em"
                              width="1.5em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
                            </svg>
                          </span>
                          <span style={{ cursor: "pointer" }}>
                            <svg
                              stroke="currentColor"
                              fill="#50C878"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              height="1.1em"
                              width="1.1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill="none"
                                stroke="#50C878"
                                stroke-width="2"
                                d="M2,2 L22,2 L22,22 L2,22 L2,2 Z M5,13 L10,17 L19,6"
                              ></path>
                            </svg>
                          </span>
                        </Col>
                        <hr className="mt-2" />
                      </div>
                    </div>
                    <div className="add-task" style={{ textAlign: "center" }}>
                      <a
                        href="#"
                        className="add-link"
                        style={{ color: "#775da6" }}
                      >
                        Add new task
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="card task p-0 mb-2 todo-tasks">
                <div className="card-body">
                  <h6 className="fw-bold mb-4" style={{ fontSize: "18px" }}>
                    In progress
                  </h6>
                  <div className="mt-3">
                    <div className="tasks-list">
                      <div className="row">
                        <Col className="col-lg-8 col-md-7 col-sm-7">
                          <span className="p-1" style={{ fontWeight: "500" }}>
                            Finish this component
                          </span>
                        </Col>
                        <Col
                          className="col-lg-4 col-sm-5  col-md-7"
                          style={{ textAlign: "right" }}
                        >
                          <span className="p-2" style={{ cursor: "pointer" }}>
                            <svg
                              stroke="currentColor"
                              fill="#C41E3A"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              height="1.5em"
                              width="1.5em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
                            </svg>
                          </span>
                          <span style={{ cursor: "pointer" }}>
                            <svg
                              stroke="currentColor"
                              fill="#50C878"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              height="1.1em"
                              width="1.1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill="none"
                                stroke="#50C878"
                                stroke-width="2"
                                d="M2,2 L22,2 L22,22 L2,22 L2,2 Z M5,13 L10,17 L19,6"
                              ></path>
                            </svg>
                          </span>
                        </Col>
                        <hr className="mt-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="card task p-0 mb-2 todo-tasks">
                <div className="card-body">
                  <h6 className="fw-bold mb-4" style={{ fontSize: "18px" }}>
                    Completed
                  </h6>
                  <div className="mt-3">
                    <div className="tasks-list">
                      <div className="row">
                        <Col className="col-lg-8 col-md-7 col-sm-8">
                          <span className="p-1" style={{ fontWeight: "500" }}>
                            Finish this component
                          </span>
                        </Col>
                        <Col
                          className="col-lg-4 col-sm-6  col-md-4"
                          style={{ textAlign: "right" }}
                        >
                          <span className="p-2" style={{ cursor: "pointer" }}>
                            <svg
                              stroke="currentColor"
                              fill="#C41E3A"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              height="1.5em"
                              width="1.5em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
                            </svg>
                          </span>
                        </Col>
                        <hr className="mt-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tasks;
