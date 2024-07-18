import { useState, useEffect } from "react";
import { Modal, Col } from "react-bootstrap";

const AddTask = ({
  show,
  handleClose,
  showNotification,
  setAddSuccess,
  userId,
}) => {
  const [taskData, setTaskData] = useState({
    taskName: "",
    taskType: "ordinary",
    status: "to-do",
    priority: "low",
    projectId: "",
  });
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState("");

  useEffect(() => {
    const getProjects = async () => {
      const token = localStorage.getItem("token");
      if (!token || token.split(".").length !== 3) {
        console.log("Invalid token");
      }

      try {
        const response = await fetch(
          "http://localhost:9090/projects/getProjectByUser",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/application/x-www-form-urlencoded",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const projects = await response.json();
        setProjects(projects);
      } catch (error) {
        console.log("Failed to fetch", error);
      }
    };
    getProjects();
  }, [userId]);

  const addTask = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const newTask = { ...taskData, project: { id: projectId } };
    if (taskData.taskName.length > 0 && projectId) {
      try {
        const response = await fetch("http://localhost:9090/tasks/addTask", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newTask),
        });
        if (response.ok) {
          console.log("Task added");
          handleClose();
          setAddSuccess("Task added successfully!");
          showNotification("Task added successfully!");

          setTimeout(() => {
            window.location.reload();
          }, 700);
        } else {
          console.log("Failed to add task");
        }
      } catch (error) {
        console.log("Failed to add task", error);
      }
    } else {
      console.log("Enter task name and select a project");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleProjectChange = (event) => {
    setProjectId(event.target.value);
    setTaskData((prevData) => ({ ...prevData, projectId: event.target.value }));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="md">
        <form onSubmit={addTask}>
          <Modal.Header closeButton>
            <h6 className="fw-bold">Add new task</h6>
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
              <Col md={3}>
                <h6 className="mt-1">Project</h6>
              </Col>
              <Col md={6}>
                <select
                  value={projectId}
                  onChange={handleProjectChange}
                  className="form-select"
                >
                  <option value="">--Select project--</option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.projectName}
                    </option>
                  ))}
                </select>
              </Col>
            </div>
            <div className="priority m-1 row">
              <Col md={3}>
                <h6 className="mt-1">Priority</h6>
              </Col>
              <Col md={9}>
                <select
                  name="priority"
                  value={taskData.priority}
                  onChange={handleChange}
                  className="priority-select"
                  style={{ width: "155px", border: "solid #ccc 1px" }}
                >
                  <option value="low">Low</option>
                  <option value="high">High</option>
                </select>
              </Col>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="">
              <button
                className="btn btn-secondary m-1"
                onClick={handleClose}
                type="button"
              >
                Cancel
              </button>
              <button
                className="btn"
                type="submit"
                style={{ backgroundColor: "#ff0854", color: "#fff" }}
              >
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
