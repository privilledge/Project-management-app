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
                      <ul className="mt-3 list-style-none">
                        <li className="mb-0">{task.taskName}</li>
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
                    <ul>
                      {projects.map((project) => (
                        <li>{project.projectName}</li>
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
