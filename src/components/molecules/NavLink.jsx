import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../services/authServices";

export default function NavLink() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();

  const isActive = (path) => {
    return currentPath === path ? "bg-[#BFD8AF] rounded-[8px] p-[8px] w-full text-center" : "";
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (e) {
      console.log("Failed to log out", e);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-[40px] m-[18px] text-[16px] px-[8px] items-center  ">
        <Link to="/" className={`${isActive("/")}`}>
          Dashboard
        </Link>
        <Link to="/notes" className={`${isActive("/notes")}`}>
          Notes
        </Link>
        <Link to="/account" className={`${isActive("/account")}`}>
          Account
        </Link>
        <Link onClick={handleLogout} className={`${isActive("/logout")}`}>
          Logout
        </Link>
      </div>
    </>
  );
}
