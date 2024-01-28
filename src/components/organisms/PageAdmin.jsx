import Header from "./header";
import Sidebar from "./sidebar-admin";
import { Outlet } from "react-router-dom";

export default function PageAdmin() {
  return (
    <>
      <div className="font-montserrat relative">
        <Header />
        <Sidebar />
        <div className="absolute left-[18%] mt-[35px] right-0">
          <Outlet />
        </div>
      </div>
    </>
  );
}
