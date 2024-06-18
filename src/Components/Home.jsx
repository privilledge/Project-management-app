import { Row, Col } from "react-bootstrap";
import Searchbar from "../Components/Searchbar";
import Icon from "../Components/Icon";
function Home() {
  return (
    <>
      <div className="container">
        <Row>
          <Col md={4}>
            {" "}
            <h3 className="fw-bold py-0 mb-0">Hello, Privilledge</h3>
            <small className="mb-0 mt-0">Welcome to your workspace</small>
          </Col>
          <Col md={6}>
            <Searchbar />
          </Col>
          <Col md={2}>
            <Icon />
          </Col>
        </Row>

        <div className="intro-card mt-5">
          <Row>
            <Col md={4}>
              <h5>Projects Stats</h5>
              <Row>
                <Col md={2}>
                  <h1 className="fw-bold">15</h1>
                </Col>
                <Col md={3}>
                  <span style={{ fontSize: "15px" }}>
                    Total
                    <br />
                    Projects
                  </span>
                </Col>
              </Row>
            </Col>
            <Col md={5}>
              <Row>
                <Col md={4}>Graph</Col>
                <Col md={6}>
                  <span style={{ fontSize: "15px" }}>
                    - In progress 20%
                    <br />
                    - Completed 60%
                    <br />- Not yet started 20%
                  </span>
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              <h6 className="" style={{ textDecoration: "underline" }}>
                Add new project
              </h6>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1.1em"
                width="1.1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#D2042D"
                  stroke-width="2"
                  d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,18 L12,6 M6,12 L18,12"
                ></path>
              </svg>
              <span style={{ fontSize: "14px" }}>
                <a
                  href="#"
                  style={{ color: "#D2042D", textDecoration: "none" }}
                >
                  Create new project
                </a>
              </span>
            </Col>
          </Row>
        </div>
        <div className="second mt-5">
          <Row>
            <Col md={6} className="tasks">
              <h5 className="fw-bold px-2 py-2">Tasks</h5>
              <Row className="mx-3">
                <Col md={3} className="task text-center mx-3 mb-2">
                  Task1
                </Col>
                <Col md={3} className="task text-center mx-3 mb-2">
                  Task2
                </Col>
                <Col md={3} className="task text-center mx-3 mb-2">
                  task 3
                </Col>
              </Row>
              <Row className="mx-3">
                <Col md={3} className="task text-center mx-3 mb-2">
                  Task1
                </Col>
                <Col md={3} className="task text-center mx-3 mb-2">
                  Task2
                </Col>
                <Col md={3} className="task text-center mx-3 mb-2">
                  task 3
                </Col>
              </Row>
            </Col>

            <Col md={6} className="tasks">
              <h5 className="fw-bold px-2 py-2">Tasks</h5>
              <Row className="mx-3">
                <Col md={3} className="task text-center mx-3 mb-2">
                  Task1
                </Col>
                <Col md={3} className="task text-center mx-3 mb-2">
                  Task2
                </Col>
                <Col md={3} className="task text-center mx-3 mb-2">
                  task 3
                </Col>
              </Row>
              <Row className="mx-3">
                <Col md={3} className="task text-center mx-3 mb-2">
                  Task1
                </Col>
                <Col md={3} className="task text-center mx-3 mb-2">
                  Task2
                </Col>
                <Col md={3} className="task text-center mx-3 mb-2">
                  task 3
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
export default Home;
