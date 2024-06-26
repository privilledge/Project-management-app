import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Row, Col } from "react-bootstrap";
import CreateProjectModal from "./CreateProjectModal";

function Projects() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);
  const [projects, setProjects] = useState({});

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
          <div className="row">
            <Col md={6} xs={5} sm={6} className="mt-2">
              <h4
                className="fw-bold projects-title"
                style={{ textDecoration: "underline" }}
              >
                Projects
              </h4>
            </Col>
            <Col md={6} xs={7} sm={6} className="create-link mt-1">
              <a
                href="#"
                className=""
                style={{ color: "#ff0854" }}
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
                    stroke="#ff0854"
                    strokeWidth="2"
                    d="M12,18 L12,6 M6,12 L18,12"
                  ></path>
                </svg>
                Add project
              </a>
            </Col>
          </div>
          <CreateProjectModal show={showModal} handleClose={handleHideModal} />

          <div className="projects-cards mt-5">
            {projectChunks.map((chunk, chunkIndex) => (
              <Row key={chunkIndex}>
                {chunk.map((project) => (
                  <Col md={4}>
                    <div className={`card ${project.status} p-1 mb-1`}>
                      <div className="card-body">
                        {" "}
                        <div className="row d-flex">
                          <div className="col-7">
                            {" "}
                            <h4
                              className="fw-bold mt-1"
                              style={{ fontSize: "16px" }}
                            >
                              {project.projectName}
                            </h4>
                          </div>

                          <div className="status-btn col-5 mb-1">
                            <button
                              className="status"
                              style={{ width: "fit-content" }}
                            >
                              {project.status}
                            </button>
                          </div>
                        </div>
                        <div className="description">
                          <p>{project.summary}</p>
                        </div>
                        <div className="dates">
                          <h6 style={{ fontSize: "14px" }}>
                            Added date:{project.addedDate}
                          </h6>
                          <h6 style={{ fontSize: "14px" }}>
                            Due date:{project.dueDate}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
