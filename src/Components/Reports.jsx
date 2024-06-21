import CalendarWidget from "./CalendarWidget";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

function Reports() {
  const myDate = () => {
    console.log(new Date());
  };
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <div>
          <button onClick={myDate}>Hey</button>
        </div>
      </div>
    </>
  );
}
export default Reports;
