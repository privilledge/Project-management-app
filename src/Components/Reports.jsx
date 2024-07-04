import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

function Reports() {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <div className="card m-5">
          <div className="card-body m-5 text-center">
            <h5>Add projects and tasks to generate reports</h5>
          </div>
        </div>
      </div>
    </>
  );
}
export default Reports;
