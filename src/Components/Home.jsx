import { Row, Col } from "react-bootstrap";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import CalendarWidget from "./CalendarWidget";
import CreateProjectModal from "./CreateProjectModal";
import { useState } from "react";
import { useEffect } from "react";
import graph from "../assets/graph.png";
import pieChart from "../assets/pieChart.png";

function Home() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  const calendarPage = () => {
    navigate("/pma/calendar");
  };
  const reportsPage = () => {
    navigate("/pma/reports");
  };
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);
  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetch("http://localhost:9090/tasks/getTasks");
        if (response.ok) {
          console.log("Fetched");
        }
        const result = await response.json();
        setTasks(result.slice(0, 5));
      } catch (error) {
        console.log("Failed to fetch data");
      }
    };
    getTasks();
  }, []);
  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch(
          "http://localhost:9090/projects/getProjects"
        );
        const result = await response.json();
        setProjects(result.slice(0, 4));
      } catch (error) {
        console.log("Failed to fetch");
      }
    };
    getProjects();
  }, []);
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
              <Col md={5} className="py-3 create">
                {" "}
                <button onClick={handleShowModal} className="btn">
                  Add project
                </button>
              </Col>
            </Row>
          </div>
          <CreateProjectModal show={showModal} handleClose={handleHideModal} />

          <div className="first">
            <div className="row home-cards">
              <div className=" col-lg-5">
                <div className="card mb-1">
                  <div
                    className="card-body calendarWidget"
                    onClick={calendarPage}
                  >
                    <h6 className="fw-bold">Your calendar</h6>
                    <CalendarWidget />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card mb-1">
                  <div className="card-body">
                    <h6 className="fw-bold">Tasks</h6>

                    {tasks.map((task) => (
                      <ul className="mt-3 list-unstyled">
                        <li className="mb-0">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            className="m-1"
                          >
                            <path
                              d="M16.7679 5.71447C17.4779 4.86832 18.7394 4.75795 19.5856 5.46796C20.4317 6.17796 20.5421 7.43947 19.8321 8.28562L10.833 19.0102C10.123 19.8564 8.86153 19.9668 8.01538 19.2568C7.16923 18.5468 7.05886 17.2852 7.76886 16.4391L16.7679 5.71447Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M3 12.7396C3 11.6351 3.89543 10.7396 5 10.7396C6.10457 10.7396 7 11.6351 7 12.7396C7 13.8442 6.10457 14.7396 5 14.7396C3.89543 14.7396 3 13.8442 3 12.7396Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          {task.taskName}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second mt-2">
            <div className="row home-cards">
              <div className=" col-lg-4">
                <div className="card mb-1">
                  <div className="card-body">
                    <h6 className="fw-bold">Project directory</h6>
                    <ul className="mt-4 list-unstyled">
                      {projects.map((project) => (
                        <li className="" style={{ cursor: "pointer" }}>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 640 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            className="m-1"
                          >
                            <path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path>
                          </svg>{" "}
                          {project.projectName}
                          <hr />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4">
                <div className="card mb-1">
                  <div className="card-body">
                    <h6 className="fw-bold">Total projects</h6>
                    <div className="py-4 mt-4 text-center">
                      <h1>
                        43{" "}
                        <span>
                          Total
                          <br />
                          Projects
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4">
                <div className="card mb-1" onClick={reportsPage}>
                  <div className="card-body">
                    <h6 className="fw-bold">Reports</h6>
                    <div className="row">
                      <div
                        className="col-lg-5 col-sm-6 mt-0"
                        style={{ textAlign: "center" }}
                      >
                        <img
                          src={pieChart}
                          alt=""
                          className="pieChart"
                          style={{ width: "180px" }}
                        />
                      </div>
                      <div
                        className="col-lg-7 col-sm-6  mt-1 "
                        style={{ textAlign: "center" }}
                      >
                        <img
                          src={graph}
                          alt=""
                          className="graph"
                          style={{ width: "200px", height: "170px" }}
                        />
                      </div>
                    </div>
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
