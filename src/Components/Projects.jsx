import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Row, Col } from "react-bootstrap";
import CreateProjectModal from "./CreateProjectModal";
import { useNavigate } from "react-router";

function Projects() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);
  const [projects, setProjects] = useState({});
  const [addSuccess, setAddSuccess] = useState(""); // State for add success message
  const [notification, setNotification] = useState("");

  const placeholderProjects = [{}];
  // Split the projects array into chunks of 3

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch(
          "http://localhost:9090/projects/getProjects"
        );
        const result = await response.json();
        setProjects(result);
      } catch (error) {
        console.log("Failed to fetch");
      }
    };
    getProjects();
  }, []);
  const projectChunks = [];
  for (let i = 0; i < projects.length; i += 3) {
    projectChunks.push(projects.slice(i, i + 3));
  }
  const handleViewProject = (id) => {
    navigate(`/pma/viewProject/${id}`);
  };
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification("");
    }, 3000); // Notification disappears after 3 seconds
  };
  return (
    <>
      <Sidebar />
      <div className="main-content ">
        <TopBar />
        <div
          className=" card m-3 p-4"
          style={{
            backgroundColor: "",
            borderRadius: "7px",
            border: "none",
            minHeight: "35rem",
          }}
        >
          <div
            className="row"
            style={{ marginLeft: "0px", marginRight: "0px" }}
          >
            <Col md={6} xs={5} sm={6} className="mt-2">
              <h5 className="fw-bold projects-title mt-1" style={{}}>
                All Projects
              </h5>
            </Col>
            <Col md={6} xs={7} sm={6} className="create-link mt-1">
              <a
                href="#"
                className="btn"
                style={{
                  backgroundColor: "#ff0854",
                  border: "1px solid red",
                  color: "#fff",
                }}
                onClick={handleShowModal}
              >
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
              </a>
            </Col>
          </div>
          <CreateProjectModal
            show={showModal}
            handleClose={handleHideModal}
            setAddSuccess={setAddSuccess}
          />
          {addSuccess && <div className="notification">{addSuccess}</div>}{" "}
          {projects.length > 0 ? (
            <div className="projects-cards mt-2">
              {projectChunks.map((chunk, chunkIndex) => (
                <Row key={chunkIndex}>
                  {chunk.map((project) => (
                    <Col md={4} key={project.id}>
                      <div
                        className={`card ${project.status} p-0 mb-1`}
                        onClick={() => handleViewProject(project.id)}
                      >
                        <div className="card-body">
                          {" "}
                          <div className="row d-flex">
                            <div className="col-7">
                              {" "}
                              <h4
                                className="fw-bold mt-1"
                                style={{ fontSize: "15px" }}
                              >
                                {project.projectName}
                              </h4>
                            </div>

                            <div className="status-btn col-5 mb-1">
                              <button
                                className="status"
                                style={{
                                  width: "fit-content",
                                  fontSize: "small",
                                }}
                              >
                                {project.status}
                              </button>
                            </div>
                          </div>
                          <div className="description">
                            <p style={{ fontSize: "14px" }}>
                              {project.summary}
                            </p>
                          </div>
                          <div className="dates">
                            <h6 style={{ fontSize: "14px" }}>
                              Added date:{" "}
                              <span
                                style={{ fontSize: "14px", fontWeight: "300" }}
                              >
                                {project.addedDate}
                              </span>
                            </h6>

                            <h6 style={{ fontSize: "14px" }}>
                              Due date:
                              <span
                                style={{ fontSize: "14px", fontWeight: "300" }}
                              >
                                {project.dueDate}
                              </span>
                            </h6>
                          </div>
                          <div className="mt-4">
                            <h6 style={{ fontSize: "14px" }}>
                              Progress : {project.progress}%
                            </h6>
                            <div className="progress card-progress ">
                              <div
                                className={`progress-bar w-${project.progress}`}
                                style={{ width: `${project.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              ))}
            </div>
          ) : (
            <h5
              style={{
                textAlign: "center",
                marginTop: "150px",
                color: "GrayText",
                fontSize: "16px",
              }}
            >
              No projects...
            </h5>
          )}
        </div>
      </div>
    </>
  );
}
export default Projects;
