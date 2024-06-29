import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import EditTask from "./EditTask";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function ViewTask() {
  const [showEditModal, setEditShowModal] = useState(false);
  const [task, setTask] = useState({ status: "", taskName: "", taskType: "" });
  const { id } = useParams();
  const navigate = useNavigate();
  const handleCloseEdit = () => {
    setEditShowModal(false);
  };
  const handleshowEdit = () => {
    setEditShowModal(true);
  };

  useEffect(() => {
    const getTask = async () => {
      try {
        const response = await fetch(
          `http://localhost:9090/tasks/taskById/${id}`
        );
        if (response.ok) {
          console.log("Fetched task");
        } else {
          console.log("Response error");
        }

        const result = await response.json();
        setTask(result);
        console.log(task.taskName);
      } catch (error) {
        console.log("Failed to get task");
      }
    };
    getTask();
  }, [id]);

  const handleDeleteTask = async () => {
    try {
      const response = await fetch(
        `http://localhost:9090/tasks/deleteTask/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        navigate("/pma/tasks");
        console.log("Deleted");
      }
    } catch (error) {
      console.log("Failed to delete", error);
    }
  };
  return (
    <>
      <Sidebar />
      <div className="main-content">
        {" "}
        <TopBar />
        <div className="container">
          {" "}
          <div className="card task-card m-3 p-4">
            <div
              className="card-top "
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="link mt-2">
                {" "}
                <Link to="/pma/tasks">
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
                <button className="btn btn-info p-2 m-1 editTask">
                  <svg
                    stroke="currentColor"
                    fill="#fff"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={handleshowEdit}
                  >
                    <path d="M7,17.013l4.413-0.015l9.632-9.54c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414l-1.586-1.586	c-0.756-0.756-2.075-0.752-2.825-0.003L7,12.583V17.013z M18.045,4.458l1.589,1.583l-1.597,1.582l-1.586-1.585L18.045,4.458z M9,13.417l6.03-5.973l1.586,1.586l-6.029,5.971L9,15.006V13.417z"></path>
                    <path d="M5,21h14c1.103,0,2-0.897,2-2v-8.668l-2,2V19H8.158c-0.026,0-0.053,0.01-0.079,0.01c-0.033,0-0.066-0.009-0.1-0.01H5V5	h6.847l2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z"></path>
                  </svg>
                </button>
                <button
                  className="btn btn-info p-2 deleteProject"
                  onClick={handleDeleteTask}
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
              </div>
            </div>{" "}
            <div className="task-body m-2">
              {" "}
              <h5>{task.taskName}</h5>
              <div className="dropdown m-1 row">
                <Col md={3}>
                  <h6 className="mt-1">Project</h6>
                </Col>
                <Col md={6}>Project name</Col>
              </div>
              <div className="priority m-1 row">
                <Col md={3}>
                  <h6 className="mt-1">Priority</h6>
                </Col>
                <Col md={9}>
                  {" "}
                  <span>
                    {" "}
                    <button className="btn btn-danger btn-sm">
                      High priority
                    </button>
                  </span>
                </Col>
              </div>
            </div>
          </div>
          <EditTask
            show={showEditModal}
            handleClose={handleCloseEdit}
            taskData={task}
            setTaskData={setTask}
          />
        </div>
      </div>
    </>
  );
}
export default ViewTask;
