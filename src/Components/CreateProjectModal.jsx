import { useState } from "react";
import { Modal, Button, Col } from "react-bootstrap";
function CreateProjectModal({ show, handleClose }) {
  return (
    <>
      <Modal show={show} className="modal " onHide={handleClose} size="lg">
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
          <hr />
          <div className="row projects-buttons"></div>

          <textarea
            name=""
            id=""
            cols=""
            rows="10"
            placeholder=" Write a description,a project brief or collect ideas..."
            style={{ border: "none", color: "red" }}
          />

          <hr />
        </Modal.Body>
      </Modal>
    </>
  );
}
export default CreateProjectModal;
