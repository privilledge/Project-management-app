import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Row, Col } from "react-bootstrap";
// Function to shuffle an array

function Projects() {
  const projects = [
    {
      id: 1,
      projectName: "Ecommerce website",
      description:
        "This is the project description. It is a short summary of what the projects is about",
      addedDate: "06/02/2024",
      dueDate: "01/05/2024",
      status: "not-started",
    },
    {
      id: 2,
      projectName: "Landing page",
      description:
        "This is the project description. It is a short summary of what the projects is about",
      addedDate: "16/04/2024",
      dueDate: "04/07/2024",
      status: "done",
    },
    {
      id: 3,
      projectName: "Project management android app",
      description:
        "This is the project description. It is a short summary of what the projects is about",
      addedDate: "16/07/2024",
      dueDate: "04/09/2024",
      status: "in-progress",
    },
  ];
  // Split the projects array into chunks of 3
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
            <Col md={6} xs={7} sm={6} className="create mt-1">
              <a href="#" className="" style={{ color: "#775da6" }}>
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
                    stroke="#775da6"
                    strokeWidth="2"
                    d="M12,18 L12,6 M6,12 L18,12"
                  ></path>
                </svg>
                Add project
              </a>
            </Col>
          </div>

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
                            <h6
                              className="fw-bold"
                              style={{ fontSize: "14px" }}
                            >
                              {project.projectName}
                            </h6>
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
                          <p>{project.description}</p>
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
