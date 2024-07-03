import { useRef, useState } from "react";
import { Modal, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
function CreateProjectModal({ show, handleClose, setAddSuccess }) {
  const ref = useRef();
  const ref2 = useRef();
  const navigate = useNavigate;
  const [selectedValue, setSelectedValue] = useState("Status");
  const [data, setData] = useState({
    projectName: "",
    status: "",
    description: "",
    summary: "",
    addedDate: "",
    dueDate: "",
    progress: "",
  });

  const handleSelectedValue = (value) => setSelectedValue(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:9090/projects/addProject",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        console.log("Added project");
        handleClose();
        setAddSuccess("Project added successfully!"); // Set add success message

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      navigate("/pma/projects");
    } catch (error) {
      console.log("Failed to add project");
    }
  };

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <>
      <Modal show={show} className="modal " onHide={handleClose} size="lg">
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="container">
            <Modal.Header closeButton className="custom-modal-header p-3">
              <Modal.Title>
                <h6>New project</h6>
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
                value={data.projectName}
                onChange={handleOnchange}
                required
              />
              <br />
              <input
                type="text"
                name="summary"
                id=""
                placeholder="Add a short summary"
                style={{ fontSize: "15px", fontWeight: "600" }}
                className=" project-name-input m-1"
                value={data.summary}
                onChange={handleOnchange}
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
                    value={data.addedDate}
                    onChange={handleOnchange}
                    required
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
                    value={data.dueDate}
                    onChange={handleOnchange}
                    onFocus={() => (ref2.current.type = "date")}
                    onBlur={() => (ref2.current.type = "text")}
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
                      {selectedValue}
                    </button>
                    <ul className="dropdown-menu">
                      <li
                        className="dropdown-item"
                        onClick={() => {
                          handleSelectedValue("Not-started");
                          data.status = "Not-started";
                        }}
                      >
                        Not started
                      </li>
                      <li
                        className="dropdown-item"
                        onClick={() => {
                          handleSelectedValue("In-progress");
                          data.status = "In-progress";
                        }}
                      >
                        In-progress
                      </li>
                      <li
                        className="dropdown-item"
                        onClick={() => {
                          handleSelectedValue("Completed");
                          data.status = "Completed";
                        }}
                      >
                        Completed
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={3} sm={4} xs={4}>
                  <input
                    type="number"
                    name="progress"
                    placeholder="Progress %"
                    id=""
                    value={data.progress}
                    onChange={handleOnchange}
                  />
                </Col>
              </div>
              <hr style={{ color: "#31D2F2" }} />
              <textarea
                name="description"
                id=""
                cols=""
                rows="5"
                placeholder=" Write a description or a project brief..."
                style={{ border: "none", width: "100%" }}
                value={data.description}
                onChange={handleOnchange}
              />

              <hr />
              <textarea
                name="notes"
                id=""
                cols=""
                rows="5"
                placeholder=" Write some notes..."
                style={{ border: "none", width: "100%" }}
                value={data.notes}
                onChange={handleOnchange}
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
                  Add Project
                </button>
              </div>
            </Modal.Body>
          </div>
        </form>
      </Modal>
    </>
  );
}
export default CreateProjectModal;
