import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Link, useParams } from "react-router-dom";
import EditProjectModal from "./EditProjectModal";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";

const ViewProject = () => {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState({
    projectName: "",
    summary: "",
    description: "",
    status: "",
    dueDate: "",
    addedDate: "",
    notes: "",
    progress: "",
  });
  const { id } = useParams();
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  useEffect(() => {
    const getProject = async () => {
      try {
        const response = await fetch(
          `http://localhost:9090/projects/getProjectById/${id}`
        );
        if (response.ok) {
          console.log("Fetched project");
        }
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.log("Failed to get project");
      }
    };
    getProject();
  }, [id]);

  const showEditModal = () => {
    setEditModal(true);
  };
  const handleClose = () => {
    setEditModal(false);
  };
  const deleteProject = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:9090/projects/delete/${id}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        navigate("/pma/projects");
        console.log("Deleted");
      }
    } catch (error) {
      console.log("Failed to delete");
    }
  };
  const showDeleteModal = () => {
    setDeleteModal(true);
  };
  const hideDeleteModal = () => {
    setDeleteModal(false);
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <TopBar />

        <div className="project-card">
          <div className="card  p-3 m-4">
            <div className="container">
              <div
                className="card-top "
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="link mt-3">
                  {" "}
                  <Link to="/pma/projects">
                    <svg
                      stroke="currentColor"
                      fill="#ff0854"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1.8em"
                      width="1.8em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path>
                    </svg>
                  </Link>
                </div>
                <div className="btns">
                  {" "}
                  <button className="btn btn-info p-2 editProject">
                    <svg
                      stroke="currentColor"
                      fill="#fff"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1.2em"
                      width="1.2em"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={showEditModal}
                    >
                      <path d="M7,17.013l4.413-0.015l9.632-9.54c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414l-1.586-1.586	c-0.756-0.756-2.075-0.752-2.825-0.003L7,12.583V17.013z M18.045,4.458l1.589,1.583l-1.597,1.582l-1.586-1.585L18.045,4.458z M9,13.417l6.03-5.973l1.586,1.586l-6.029,5.971L9,15.006V13.417z"></path>
                      <path d="M5,21h14c1.103,0,2-0.897,2-2v-8.668l-2,2V19H8.158c-0.026,0-0.053,0.01-0.079,0.01c-0.033,0-0.066-0.009-0.1-0.01H5V5	h6.847l2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z"></path>
                    </svg>
                  </button>
                  <button
                    className="btn btn-info p-2 deleteProject"
                    onClick={showDeleteModal}
                  >
                    <svg
                      stroke="currentColor"
                      fill="#fff"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1.2em"
                      width="1.2em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path>
                    </svg>
                  </button>
                  <Modal show={deleteModal} size="sm" onHide={hideDeleteModal}>
                    <ModalHeader
                      closeButton
                      style={{ border: "none" }}
                    ></ModalHeader>
                    <ModalBody className="text-center">
                      {" "}
                      <h5>Delete project?</h5>
                    </ModalBody>
                    <ModalFooter className="text-center">
                      <button
                        className="btn-sm btn btn-info"
                        style={{ color: "#fff", fontSize: "15px" }}
                        onClick={hideDeleteModal}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn-sm btn btn-danger"
                        style={{ fontSize: "15px" }}
                        onClick={deleteProject}
                      >
                        Yes
                      </button>
                    </ModalFooter>
                  </Modal>
                </div>
                <EditProjectModal
                  show={editModal}
                  handleClose={handleClose}
                  projectData={projectData}
                  setProjectData={setProjectData}
                />
              </div>{" "}
              <hr />
              <div className="body mt-0">
                <h5 className="mt-1 fw-bold" style={{ color: "CaptionText" }}>
                  {projectData.projectName}
                </h5>
                <div
                  className="summary"
                  style={{ color: "GrayText", fontSize: "16px" }}
                >
                  <h6>Summary:</h6> <hr style={{ color: "red", margin: 0 }} />
                  {projectData.summary}
                </div>
                <br />
                <div className="description">
                  <p
                    className=""
                    style={{ color: "GrayText", fontSize: "15px" }}
                  >
                    <h6>Project description:</h6>{" "}
                    <hr style={{ color: "red", margin: 0 }} />
                    {projectData.description}
                  </p>
                </div>

                {/* <div className="notes">
                  <p className="" style={{ fontWeight: "600" }}>
                    Tasks:
                  </p>
                  <hr style={{ color: "red" }} />
                  <ul style={{ color: "GrayText" }}>
                    <li>Task</li>
                    <li>Task</li>
                    <li>Task</li>
                  </ul>
                </div> */}
                <br />
                <div className="notes">
                  <p
                    className=""
                    style={{ color: "GrayText", fontSize: "15px" }}
                  >
                    <h6>Project notes:</h6>{" "}
                    <hr style={{ color: "red", margin: 0 }} />
                    {projectData.notes}
                  </p>
                </div>
                <p className="" style={{ fontWeight: "600" }}>
                  Progress :{projectData.progress}%
                </p>
                <div className="progress card-progress ">
                  <div
                    className={`progress-bar w-${projectData.progress}`}
                    style={{ width: `${projectData.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewProject;
