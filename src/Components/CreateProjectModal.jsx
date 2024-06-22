import { useRef, useState } from "react";
import { Modal, Button, Col } from "react-bootstrap";
function CreateProjectModal({ show, handleClose }) {
  const ref = useRef();
  const ref2 = useRef();
  const [selectedValue, setSelectedValue] = useState("Status");

  const handleSelectedValue = (value) => setSelectedValue(value);
  return (
    <>
      <Modal show={show} className="modal " onHide={handleClose} size="lg">
        <div className="container">
          {" "}
          <Modal.Header closeButton className="custom-modal-header p-3">
            <Modal.Title>
              <h6>New project</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              name=""
              id=""
              placeholder="Project name"
              style={{ fontSize: "20px", color: "#000" }}
              className="fw-bold project-name-input m-1"
            />
            <br />
            <input
              type="text"
              name=""
              id=""
              placeholder="Add a short summary"
              style={{ fontSize: "16px", fontWeight: "600" }}
              className=" project-name-input m-1"
            />

            <div className="row projects-buttons mt-3 ">
              <Col md={3} sm={4} xs={4}>
                {" "}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Start date"
                  ref={ref}
                  onChange={(e) => console.log(e.target.value)}
                  onFocus={() => (ref.current.type = "date")}
                  onBlur={() => (ref.current.type = "text")}
                />
              </Col>

              <Col md={3} sm={4} xs={4}>
                {" "}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Due date"
                  ref={ref2}
                  onChange={(e) => console.log(e.target.value)}
                  onFocus={() => (ref2.current.type = "date")}
                  onBlur={() => (ref2.current.type = "text")}
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
                      onClick={() => handleSelectedValue("Not-started")}
                    >
                      Not started
                    </li>
                    <li
                      className="dropdown-item"
                      onClick={() => handleSelectedValue("In-progress")}
                    >
                      In-progress
                    </li>
                    <li
                      className="dropdown-item"
                      onClick={() => handleSelectedValue("Completed")}
                    >
                      Completed
                    </li>
                  </ul>
                </div>
              </Col>
            </div>
            <hr />
            <textarea
              name=""
              id=""
              cols=""
              rows="10"
              placeholder=" Write a description,a project brief or collect ideas..."
              style={{ border: "none", width: "100%" }}
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
              <div
                className="btn  m-1"
                style={{
                  width: "fit-content",
                  backgroundColor: "#0dcaf0",
                  color: "#fff",
                }}
              >
                Add Project
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}
export default CreateProjectModal;
