import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Col } from "react-bootstrap";

function Tasks() {
  const tasks = [
    {
      id: 1,
      title: "Finish the tasks component",
      category: "to-do",
    },
    { id: 2, title: "Look into dashboards", category: "to-do" },
    { id: 3, title: "Design home page", category: "completed" },
    { id: 4, title: "Design and style landing page", category: "completed" },
  ];

  const tasksTodo = tasks.filter((task) => task.category == "to-do");
  const completedTasks = tasks.filter((task) => task.category == "completed");
  return (
    <>
      <Sidebar />

      <div className="main-content ">
        <TopBar />
        <div
          className="container tasks-container"
          style={{ background: "transparent" }}
        >
          <h5 className=" fw-bold p-1">To do</h5>
          <div className="todo-list">
            {tasksTodo.map((task) => (
              <div className="todo-item p-3 mb-1" key={task.id}>
                <div className="row">
                  <div className="col-10">
                    <input type="radio" name="" id="" />
                    <span
                      className="todo-title p-2"
                      style={{ fontSize: "auto" }}
                    >
                      {task.title}
                    </span>
                  </div>
                  <div className="col-2 star-task">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        height="1.25em"
                        width="1.25em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
            ;
          </div>
          <h6 className=" fw-bold p-1">Completed </h6>
          <div className="completed-List">
            {completedTasks.map((task) => (
              <div className="completed-item p-3 mb-1 " key={task.id}>
                <div className="row">
                  <div className="col-10">
                    <input type="radio" name="" id="" value={1} />
                    <span
                      className="todo-title p-2"
                      style={{ fontSize: "auto" }}
                    >
                      <s>{task.title}</s>
                    </span>
                  </div>
                  <div className="col-2 star-task">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        height="1.25em"
                        width="1.25em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Tasks;
