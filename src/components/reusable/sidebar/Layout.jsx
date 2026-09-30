import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/SideBar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#F8F8FC]">
      <Sidebar />

      <div className="ml-9 md:ml-64 p-13">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
