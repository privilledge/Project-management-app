import { Modal } from "react-bootstrap";
import { useRef, useState } from "react";
import { Col } from "react-bootstrap";
import { useParams } from "react-router";
function EditProjectModal({ show, handleClose, projectData, setProjectData }) {
  const ref = useRef();
  const ref2 = useRef();
  const [selectedValue, setSelectedValue] = useState(projectData.status);
  const handleStatus = (selected) => {
    setSelectedValue(selected);
  };

  const { id } = useParams();

  const updateProject = async (e) => {
    try {
      const response = await fetch(
        `http://localhost:9090/projects/editProject/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(projectData),
        }
      );
      if (response.ok) {
        console.log("Updated project");
      }
    } catch (error) {
      console.log("Failed to update project");
      e.preventDefault();
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Modal show={show} className="modal " onHide={handleClose} size="lg">
        <form action="" className="form" onSubmit={updateProject}>
          <div className="container">
            <Modal.Header closeButton className="custom-modal-header p-3">
              <Modal.Title>
                <h6>Edit project</h6>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="text"
                name="projectName"
                id=""
                placeholder="Project name"
                style={{ fontSize: "18px", color: "#000" }}
                className="fw-bold project-name-input m-1"
                value={projectData.projectName}
                onChange={handleChange}
                required
              />
              <br />
              <input
                type="text"
                name="summary"
                id=""
                placeholder="Add a short summary"
                style={{ fontSize: "14px", fontWeight: "500" }}
                className=" project-name-input m-1"
                value={projectData.summary}
                onChange={handleChange}
                required
              />

              <div className="row projects-buttons mt-3 ">
                <Col md={3} sm={4} xs={4}>
                  {" "}
                  <input
                    type="text"
                    name="addedDate"
                    id=""
                    placeholder="Starting date"
                    ref={ref}
                    onFocus={() => (ref.current.type = "date")}
                    onBlur={() => (ref.current.type = "text")}
                    required
                    value={"Added:" + projectData.addedDate}
                  />
                </Col>

                <Col md={3} sm={4} xs={4}>
                  {" "}
                  <input
                    type="text"
                    name="dueDate"
                    id=""
                    placeholder="Due date"
                    ref={ref2}
                    onFocus={() => (ref2.current.type = "date")}
                    onBlur={() => (ref2.current.type = "text")}
                    value={"Due:" + projectData.dueDate}
                    required
                  />
                </Col>
                <Col md={3} sm={4} xs={4}>
                  <div className="dropdown">
                    <button
                      className="btn status-dropdown dropdown-toggle custom-dropdown-toggle p-1"
                      data-bs-toggle="dropdown"
                      style={{
                        height: "28px",
                        width: "160px",
                        border: "1px solid #e8e8e8",
                        borderRadius: "2px",
                      }}
                    >
                      {!selectedValue ? projectData.status : selectedValue}
                    </button>
                    <ul className="dropdown-menu">
                      <li
                        className="dropdown-item"
                        onClick={() => handleStatus("Not started")}
                      >
                        Not started
                      </li>
                      <li
                        className="dropdown-item"
                        onClick={() => handleStatus("In-progress")}
                      >
                        In-progress
                      </li>
                      <li
                        className="dropdown-item"
                        onClick={() => handleStatus("Completed")}
                      >
                        Completed
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={3} sm={4} xs={4}>
                  {" "}
                  <input
                    type="text"
                    name="progress"
                    placeholder="Progress %"
                    value={`${projectData.progress}%`}
                    onChange={handleChange}
                  />
                </Col>
              </div>
              <hr style={{ color: "#31D2F2" }} />
              <textarea
                name="description"
                id=""
                cols=""
                rows="5"
                placeholder=" Write a description,a project brief or collect ideas..."
                style={{ border: "none", width: "100%" }}
                value={projectData.description}
                onChange={handleChange}
              />

              <hr />
              <textarea
                name="notes"
                id=""
                cols=""
                rows="5"
                placeholder=" Write some notes..."
                style={{ border: "none", width: "100%" }}
                value={projectData.notes}
                onChange={handleChange}
              />

              <hr />
              <div
                className="row"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div
                  className="btn btn-secondary m-1"
                  style={{ width: "fit-content" }}
                  onClick={handleClose}
                >
                  Cancel
                </div>
                <button
                  className="btn  m-1"
                  style={{
                    width: "fit-content",
                    backgroundColor: "#ff0854",
                    color: "#fff",
                  }}
                  type="submit"
                >
                  Update Project
                </button>
              </div>
            </Modal.Body>
          </div>
        </form>
      </Modal>
    </>
  );
}
export default EditProjectModal;
