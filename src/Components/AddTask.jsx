import { useState } from "react";
import { Modal } from "react-bootstrap";

const AddTask = ({ show, handleClose }) => {
  const [taskData, setTaskData] = useState({
    taskName: "",
    taskType: "ordinary",
    status: "to-do",
  });

  const addTask = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9090/tasks/addTask", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(taskData),
      });
      if (response.ok) {
        console.log("Task added");
      }
    } catch (error) {
      console.log("Failed to add task");
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <form action="" onSubmit={addTask}>
          <Modal.Header closeButton>
            <h6 className="fw-bold">Add new task</h6>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              placeholder="New task..."
              className="input-task"
              name="taskName"
              value={taskData.taskName}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <div className="">
              <button className="btn btn-secondary m-1" onClick={handleClose}>
                Cancel
              </button>
              <button className="btn btn-primary" type="submit">
                Save task
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
export default AddTask;
