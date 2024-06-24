import { Row, Col } from "react-bootstrap";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import CalendarWidget from "./CalendarWidget";
import CreateProjectModal from "./CreateProjectModal";
import { useState } from "react";
function Home() {
  const navigate = useNavigate();
  const calendarPage = () => {
    navigate("/pma/calendar");
  };
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <TopBar />

        <div className="container">
          <div className="intro">
            <Row>
              <Col md={7} className="py-3">
                {" "}
                <h2 className="fw-bold py-0 mb-0">Hi Privilledge</h2>
                <small className="mb-0 mt-0">Welcome to your workspace</small>
              </Col>
              <Col md={5} className="py-3 create">
                {" "}
                <button onClick={handleShowModal} className="btn">
                  Add project
                </button>
              </Col>
            </Row>
          </div>
          <CreateProjectModal show={showModal} handleClose={handleHideModal} />

          <div className="first">
            <div className="row home-cards">
              <div className=" col-lg-5">
                <div className="card mb-1">
                  <div
                    className="card-body calendarWidget"
                    onClick={calendarPage}
                  >
                    <h6 className="fw-bold">Your calendar</h6>
                    <CalendarWidget />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card mb-1">
                  <div className="card-body">
                    <h6 className="fw-bold">Tasks</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second mt-2">
            <div className="row home-cards">
              <div className=" col-lg-4">
                <div className="card mb-1">
                  <div className="card-body">
                    <h6 className="fw-bold">Project directory</h6>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4">
                <div className="card mb-1">
                  <div className="card-body">
                    <h6 className="fw-bold">Reports</h6>
                    <div className="p-1"></div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4">
                <div className="card mb-1">
                  <div className="card-body">
                    <h6 className="fw-bold">Settings</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
