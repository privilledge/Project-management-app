import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Tasks from "./Components/Tasks";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/pma" element={<LandingPage />} />

              <Route path="/pma/home" element={<Home />} />
              <Route path="/pma/projects" element={<Projects />} />
              <Route path="/pma/tasks" element={<Tasks />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
