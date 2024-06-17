import React from "react";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <nav style={{ width: "200px", background: "red", padding: "1rem" }}>
          <ul>
            <li>
              <Link to="/pma">Home</Link>
            </li>
          </ul>
        </nav>
        <main style={{ marginLeft: "220px" }}>
          <Outlet />
        </main>
      </div>
    </>
  );
}
export default Layout;
