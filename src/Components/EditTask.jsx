import { useEffect, useState } from "react";
import { Modal, Col } from "react-bootstrap";
import { useParams } from "react-router";
function EditTask({ handleClose, show, taskData, setTaskData, setAddSuccess }) {
  const { id } = useParams();

  const editTask = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:9090/tasks/editTask/${id}`,
        {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(taskData),
        }
      );
      if (response.ok) {
        console.log("Task edited");
        handleClose();
      }
    } catch (error) {
      console.log("Failed to update task", error);
      e.preventDefault();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="md">
        <form action="">
          <Modal.Header closeButton onHide={handleClose}>
            <h6 className="fw-bold">Edit task</h6>
          </Modal.Header>
          <Modal.Body className="m-2">
            <Col></Col>
            <input
              type="text"
              placeholder="Task name..."
              className="input-task"
              name="taskName"
              value={taskData.taskName}
              onChange={handleChange}
            />
            <br />
            <div className="dropdown m-1 row">
              <Col md={3} sm={6}>
                <h6 className="mt-1">Project</h6>
              </Col>
              <Col md={6} sm={6}>
                <span>
                  {" "}
                  <button
                    className="dropdown-toggle  custom-dropdown-toggle m-1"
                    data-bs-toggle="dropdown"
                    style={{
                      border: "1px solid whitesmoke",
                      padding: " 0.5%",
                      backgroundColor: "transparent",
                    }}
                  >
                    Choose project{" "}
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 20 20"
                        height="1.3em"
                        width="1.3em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">Project 1</li>
                  </ul>
                </span>
              </Col>
            </div>

            <div className="priority m-1 row">
              <Col md={3}>
                <h6 className="mt-1">Priority</h6>
              </Col>
              <Col md={9}>
                {" "}
                <span>
                  <div className="btn-group">
                    {" "}
                    <button className="btn btn-danger btn-sm">
                      High priority
                    </button>
                    <button className="btn btn-info btn-sm">
                      Low priority
                    </button>
                  </div>
                </span>
              </Col>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="">
              <button className="btn btn-secondary m-1" onClick={handleClose}>
                Cancel
              </button>
              <button
                className="btn"
                type="submit"
                style={{ backgroundColor: "#ff0854", color: "#fff" }}
                onClick={editTask}
              >
                Save task
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
export default EditTask;
