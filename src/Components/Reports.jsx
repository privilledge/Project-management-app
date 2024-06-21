import { useState } from "react";
import CalendarWidget from "./CalendarWidget";
import CreateProjectModal from "./CreateProjectModal";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Button } from "react-bootstrap";

function Reports() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
    console.log("working");
  };
  const handleHide = () => setShowModal(false);
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <Button variant="primary" onClick={handleShow}>
          show modal
        </Button>
        <CreateProjectModal show={showModal} handleClose={handleHide} />
      </div>
    </>
  );
}
export default Reports;
