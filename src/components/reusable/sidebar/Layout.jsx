import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/SideBar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#F8F8FC] flex">
      <Sidebar />

      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">~Spend Smarter</h1>
            <p className="text-gray-500 mt-1">Here's your financial overview</p>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
