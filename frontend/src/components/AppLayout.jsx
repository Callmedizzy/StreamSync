import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const AppLayout = () => (
  <div className="app-shell">
    <Navbar />
    <main className="content-shell">
      <Outlet />
    </main>
  </div>
);

export default AppLayout;

